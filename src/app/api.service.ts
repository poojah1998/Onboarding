import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, from } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
let async = require('async');

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private afs: AngularFirestore) { }

  getSurveyors() {
    return from(
      this.afs.firestore
        .collection(`surveyors`)
        .get()
        .then((querySnapshot) => {
          const surveyorsData: any[] = [];
          querySnapshot.forEach((doc) => {
            surveyorsData.push({ id: doc.id, ...doc.data() });
          });
          return surveyorsData;
        })
    );
  }

  getSurveyorsWithVendorInfo(): Observable<any[]> {
    return from(this.afs.firestore.collection('surveyors').get()).pipe(
      switchMap((surveyorQuerySnapshot) => {
        const surveyorPromises: Promise<any>[] = [];

        surveyorQuerySnapshot.forEach((surveyorDoc) => {
          const vendorCollectionRef = surveyorDoc.ref.collection('vendors');
          
          surveyorPromises.push(
            vendorCollectionRef.get().then((vendorQuerySnapshot) => {
              const userInfoPromises: Promise<{ vendorId: string }>[] = [];

              vendorQuerySnapshot.forEach((vendorDoc) => {
                const vendorInfoCollectionRef =
                  vendorDoc.ref.collection('AddNewVendor');
                const accInfoCollectionRef =
                  vendorDoc.ref.collection('AccountInformation');
                const userInfoData: any[] = [];
                const vendorAccountInfoData: any[] = [];
                userInfoPromises.push(
                  vendorInfoCollectionRef
                    .get()
                    .then((userInfoQuerySnapshot) => {
                      userInfoQuerySnapshot.forEach((userInfoDoc) => {
                        userInfoData.push({
                          id: userInfoDoc.id,
                          ...userInfoDoc.data(),
                        });
                      });

                      accInfoCollectionRef.get().then((InfoQuerySnapshot) => {
                        InfoQuerySnapshot.forEach((accInfoDoc) => {
                          vendorAccountInfoData.push({
                            id: accInfoDoc.id,
                            ...accInfoDoc.data(),
                          });
                        });
                      });

                      return {
                        vendorId: vendorDoc.id,
                        userInfoData,
                        vendorAccountInfoData,
                      };
                    })
                );
              });

              return Promise.all(userInfoPromises);
            })
          );
        });

        // Return both the surveyorQuerySnapshot and the surveyorPromises for later use
        return Promise.all([
          surveyorQuerySnapshot,
          Promise.all(surveyorPromises),
        ]);
      }),
      map(([surveyorQuerySnapshot, surveyorDataArrays]) => {
        const finalResult: any[] = [];

        surveyorDataArrays.forEach((vendorDataArray, index) => {
          const surveyorDoc = surveyorQuerySnapshot.docs[index];

          const userInfoForSurveyor: any[] = [];

          vendorDataArray.forEach(
            (vendorData: {
              vendorId: string;
              userInfoData: any[];
              vendorAccountInfoData: any[];
            }) => {
              userInfoForSurveyor.push({
                vendorId: vendorData.vendorId,
                userInfoData: vendorData.userInfoData,
                vendorAccountInfoData: vendorData.vendorAccountInfoData,
              });
            }
          );

          finalResult.push({ surveyorId: surveyorDoc.id, userInfoForSurveyor });
        });

        return finalResult;
      })
    );
  }

}
