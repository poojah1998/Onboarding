import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-recent-vendors',
  templateUrl: './recent-vendors.component.html',
  styleUrls: ['./recent-vendors.component.scss']
})
export class RecentVendorsComponent implements OnInit {
  surveyorList: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.surveyorData();
  }
 
  surveyorData() {
    this.api.getSurveyorsWithVendorInfo().subscribe(
      (res: any) => {
        this.surveyorList = res;
        console.log(this.surveyorList);
        const allUserInfoData: any[] = [];
        const allVendorAccountInfoData: any[] = [];
        this.surveyorList.forEach(surveyor => {
          surveyor.userInfoForSurveyor.forEach((userInfo :any) => {
           console.log(userInfo,"userInfo..................")
            // Extract userInfoData and push to allUserInfoData array
            if (userInfo.userInfoData.length > 0) {
              allUserInfoData.push(...userInfo.userInfoData);
              console.log('All UserInfoData:', allUserInfoData);
            }
        
            // Extract vendorAccountInfoData and push to allVendorAccountInfoData array
            console.log(userInfo.vendorAccountInfoData,"............userInfo.vendorAccountInfoData")
            if (userInfo.vendorAccountInfoData) {
              allVendorAccountInfoData.push(...userInfo.vendorAccountInfoData[0]);
              console.log('All VendorAccountInfoData:', allVendorAccountInfoData);
            }
          });
        });
        
        // Now you have separate arrays for userInfoData and vendorAccountInfoData
        console.log('All UserInfoData:', allUserInfoData);
        console.log('All VendorAccountInfoData:', allVendorAccountInfoData);
      },
      (error: any) => {
        console.error('Error getting vendors:', error);
      }
    );
  

  }


}
