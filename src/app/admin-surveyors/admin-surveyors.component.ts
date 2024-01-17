// admin-surveyors.component.ts

import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { ApiService } from '../api.service';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-surveyors',
  templateUrl: './admin-surveyors.component.html',
  styleUrls: ['./admin-surveyors.component.scss']
})
export class AdminSurveyorsComponent implements OnInit {
  surveyorList: any[] = [];
  surveyorListData: any[] = [];
  closeResult = '';
  name: string = '';
  zone: string = '';
  onboardedVendors: boolean = true;
  certifiedVendors: boolean = true;

  constructor(private api: ApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.surveyorData();
    this.loadSurveyorList();
  }

  surveyorData() {
    this.api.getSurveyors().subscribe(
      (res: any) => {
        this.surveyorList = res;
        // console.log(this.surveyorList);
      },
      (error: any) => {
        console.error('Error getting vendors:', error);
      }
    );
  }

  addSurveyorToList(name: string, zone: string, onboardedVendors: boolean, certifiedVendors: boolean) {
    this.api.createSurveyorList(name, zone, onboardedVendors, certifiedVendors).subscribe(
      (result) => {
        console.log('Surveyor added successfully:', result);
        this.clearForm();
      },
      (error) => {
        console.error('Error adding surveyor:', error);
      }
    );
  }
  clearForm() {
    this.name = '';
    this.zone = '';
    this.onboardedVendors = true;
    this.certifiedVendors = true;
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

// template form  functions
  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

  onSaveSurveyor() {
    this.addSurveyorToList(this.name, this.zone, this.onboardedVendors, this.certifiedVendors);
  }

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }
}
