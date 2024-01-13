import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-surveyors',
  templateUrl: './surveyors.component.html',
  styleUrls: ['./surveyors.component.scss']
})
export class SurveyorsComponent implements OnInit {
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
      },
      (error: any) => {
        console.error('Error getting vendors:', error);
      }
    );
  }
 
}
