import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot, DocumentData } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: AngularFirestore) { }
  // getVendors(): Observable<DocumentData[]> {
  //   return this.firestore.collection('surveyors').get().pipe(
  //     map((querySnapshot: QuerySnapshot<DocumentData>) => {
  //       return querySnapshot.docs.map((doc: { data: () => any; }) => doc.data());
  //     })
  //   );
  // }
}
