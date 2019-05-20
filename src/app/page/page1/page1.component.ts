import { Page1Data } from './../../model/Page1Data';
import { DataService } from './../../service/common/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  page1date = new Page1Data();

  constructor(private dataservice: DataService, private router: Router) { }

  ngOnInit() {
    if (this.dataservice.getPage1Data()) {
    this.page1date = this.dataservice.getPage1Data();
    }
  }
  onclick() {
    console.log('clieked from page 1');
    this.dataservice.setPage1Data(this.page1date);
    this.router.navigate(['/page2']);
  }

}
