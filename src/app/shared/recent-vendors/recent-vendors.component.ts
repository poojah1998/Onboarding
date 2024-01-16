import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.surveyorData();
  }

  surveyorData() {
    this.api.getSurveyorsWithVendorInfo().subscribe(
      (res: any) => {
        this.surveyorList = res;
    
        this.surveyorList.forEach(surveyor => {
          // let allIds = surveyor.map((obj :any) => obj.id);

          // let totalIds = allIds.length;
           console.log(surveyor)
          surveyor.userInfoForSurveyor.forEach((userInfo: any) => {
            
            if (userInfo.userInfoData.length > 0) {
              this.allUserInfoData.push(...userInfo.userInfoData);
            }
          });
        });

        console.log('All UserInfoData:',this.allUserInfoData, this.allUserInfoData.length);
      },
      (error: any) => {
        console.error('Error getting vendors:', error);
      }
    );
  }

  get pagedUsers(): any[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.allUserInfoData.slice(startIndex, endIndex);
  }

  hasMoreItems(): boolean {
    return this.currentPage * this.pageSize < this.allUserInfoData.length;
  }

  loadMore() {
    this.currentPage++;
  }
}
