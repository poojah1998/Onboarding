import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-surveyors',
  templateUrl: './admin-surveyors.component.html',
  styleUrls: ['./admin-surveyors.component.scss']
})
export class AdminSurveyorsComponent implements OnInit {
  surveyorList: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.surveyorData();
  }
  surveyorData() {
    this.api.getSurveyors().subscribe(
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
