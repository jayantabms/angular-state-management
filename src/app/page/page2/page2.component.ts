import { DataService } from './../../service/common/data.service';
import { Page2Data } from './../../model/Page2Data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  page2Data = new Page2Data();

  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit() {
    if (this.dataservice.getPage2Data()) {
      this.page2Data = this.dataservice.getPage2Data();
    }
  }

  page2click() {
    this.dataservice.setPage2Data(this.page2Data);
    this.router.navigate(['/page3']);
  }
  backPage() {

    this.router.navigate(['/page1']);
  }
}
