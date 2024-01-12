import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-recent-vendors',
  templateUrl: './recent-vendors.component.html',
  styleUrls: ['./recent-vendors.component.scss']
})
export class RecentVendorsComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
 
}
