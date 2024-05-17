import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-recent-vendors',
  templateUrl: './recent-vendors.component.html',
  styleUrls: ['./recent-vendors.component.scss']
})
export class RecentVendorsComponent implements OnInit {
  surveyorList: any[] = [];
  allUserInfoData: any[] = [];
  pageSize: number = 5; // Number of items to show per page
  currentPage: number = 1; // Current page

  constructor(private api: ApiService,private datePipe: DatePipe) { }
  isLoading: boolean = true;
  ngOnInit(): void {
    console.log("i am inside the resent vendors")
    this.surveyorData();
  }

  surveyorData() {
    this.isLoading = true;
    this.api.getSurveyorsWithVendorInfo().subscribe(
      (res: any) => {
        console.log('Firestore response:', res);
        this.surveyorList = res;
        console.log(this.surveyorList);

        for (const surveyorKey in this.surveyorList) {
          if (Object.prototype.hasOwnProperty.call(this.surveyorList, surveyorKey)) {
            const surveyor = this.surveyorList[surveyorKey];
            console.log(surveyor);
          
            if (surveyor && surveyor.userInfoForSurveyor) {
              for (const userInfo of surveyor.userInfoForSurveyor) {
                console.log(userInfo);
                if (userInfo.userInfoData && userInfo.userInfoData.length > 0) {
                  this.allUserInfoData.push(...userInfo.userInfoData);
                  console.log(this.allUserInfoData);
                }
              }
            }
          }
        }
  
        console.log('All UserInfoData:', this.allUserInfoData, this.allUserInfoData.length);
        this.isLoading = false;
      },
      (error: any) => {
        console.log('Firestore error:', error);
        console.error('Error getting vendors:', error);
      }
    );
  }
  
  get pagedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    console.log(this.allUserInfoData);
    return this.allUserInfoData.slice(startIndex, endIndex);
  
  }

  hasMoreItems(): boolean {
    return this.currentPage * this.pageSize < this.allUserInfoData.length;
  }

  loadMore() {
    this.currentPage++;
  }
}
