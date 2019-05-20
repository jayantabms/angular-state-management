import { P1P2Data } from 'src/app/model/P1P2Data';
import { EncryptDecryptService } from './../../service/common/EncryptDecrypt.service';
import { DataService } from './../../service/common/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Page1Data } from './../../model/Page1Data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  page1date = new Page1Data();
  p1P2Data = new P1P2Data();
  stringdata: string;

  constructor(private router: Router,
    private encryptDecryptService: EncryptDecryptService,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(
      (params) => {
        if (params.get('data')) {
          this.stringdata = this.encryptDecryptService.decryptText(params.get('data'));
          console.log('page4-------' + this.stringdata);
          this.p1P2Data = JSON.parse(this.stringdata);
          this.page1date = this.p1P2Data.page1data;

        }
      }
    );
  }
  onclick() {
    this.p1P2Data.page1data = this.page1date;
    this.router.navigate(['/page5', { data: this.encryptDecryptService.encryptText(JSON.stringify(this.p1P2Data)) }]);
  }

}
