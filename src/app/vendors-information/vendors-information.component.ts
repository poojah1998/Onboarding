import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendors-information',
  templateUrl: './vendors-information.component.html',
  styleUrls: ['./vendors-information.component.scss']
})
export class VendorsInformationComponent implements OnInit {
  longForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.longForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      // Add other form controls similarly
    });
   }

  ngOnInit(): void {
  }

}
