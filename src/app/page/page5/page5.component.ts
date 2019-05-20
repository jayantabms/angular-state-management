import { EncryptDecryptService } from './../../service/common/EncryptDecrypt.service';
import { Page1Data } from './../../model/Page1Data';
import { P1P2Data } from './../../model/P1P2Data';
import { DataService } from './../../service/common/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Page2Data } from 'src/app/model/Page2Data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {
  page2Data = new Page2Data();
  p1P2Data = new P1P2Data();
  stringdata: string;

  constructor(private router: Router, private activeRoute: ActivatedRoute
    , private encryptDecryptService: EncryptDecryptService) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        if (params.get('data')) {
          this.stringdata = this.encryptDecryptService.decryptText(params.get('data'));
          console.log('page5-------' + this.stringdata);

          this.p1P2Data = JSON.parse(this.stringdata);
          if(this.p1P2Data.page2data) {
          this.page2Data = this.p1P2Data.page2data;
          }
        }
      }
    );

  }

  page2click() {
    this.p1P2Data.page2data = this.page2Data;
    this.router.navigate(['/page6', { data: this.encryptDecryptService.encryptText(JSON.stringify(this.p1P2Data)) }]);
  }
  backPage() {

    this.router.navigate(['/page4', { data: this.encryptDecryptService.encryptText(JSON.stringify(this.p1P2Data)) }]);
  }
}
