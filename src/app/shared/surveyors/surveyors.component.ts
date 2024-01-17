import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-surveyors',
  templateUrl: './surveyors.component.html',
  styleUrls: ['./surveyors.component.scss']
})
export class SurveyorsComponent implements OnInit {
  surveyorListData: any[] = [];
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadSurveyorList();
  }

  loadSurveyorList() {
    this.api.getSurveyorList().subscribe(
      (res: any) => {
        this.surveyorListData = res;
        // console.log(this.surveyorListData);
      },
      (error: any) => {
        console.error('Error getting surveyor list:', error);
      }
    );
  }
 
}
