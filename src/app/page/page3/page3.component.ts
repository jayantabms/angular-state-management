import { P1P2Data } from './../../model/P1P2Data';
import { DataService } from './../../service/common/data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  p1P2Data: P1P2Data;

  constructor(private router: Router, private dataservice: DataService) { }

  ngOnInit() {
   this.p1P2Data = this.dataservice.p1p2data;
  }

  backPage() {
   this.router.navigate(['/page2']);
  }
}
