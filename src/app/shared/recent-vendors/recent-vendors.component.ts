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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.surveyorData();
  }

  surveyorData() {
    this.api.getSurveyorsWithVendorInfo().subscribe(
      (res: any) => {
        this.surveyorList = res;
        console.log(this.surveyorList);

        const allVendorAccountInfoData: any[] = [];

        this.surveyorList.forEach(surveyor => {
          surveyor.userInfoForSurveyor.forEach((userInfo: any) => {
            // Extract userInfoData and push to allUserInfoData array
            if (userInfo.userInfoData.length > 0) {
              this.allUserInfoData.push(...userInfo.userInfoData);
            }

            // Extract vendorAccountInfoData and push to allVendorAccountInfoData array
            if (userInfo.vendorAccountInfoData && userInfo.vendorAccountInfoData.length > 0) {
              allVendorAccountInfoData.push(...userInfo.vendorAccountInfoData);
            }
          });
        });

        // Now you have separate arrays for userInfoData and vendorAccountInfoData
        console.log('All UserInfoData:', this.allUserInfoData);
        console.log('All VendorAccountInfoData:', allVendorAccountInfoData);
      },
      (error: any) => {
        console.error('Error getting vendors:', error);
      }
    );
  }
}
