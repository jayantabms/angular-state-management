import { EncryptDecryptService } from './../../service/common/EncryptDecrypt.service';
import { DataService } from './../../service/common/data.service';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { P1P2Data } from 'src/app/model/P1P2Data';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component implements OnInit {
  p1P2Data: P1P2Data;
  stringdata: string;
  constructor(private router: Router, private dataservice: DataService,
    private activeRoute: ActivatedRoute,
    private encryptDecryptService: EncryptDecryptService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.id === 1) {
          this.router.navigate(['/page4']);
        }

      }
    });
  }

  ngOnInit() {

    this.activeRoute.paramMap.subscribe(
      (params) => {
        if (params.get('data')) {
          this.stringdata = this.encryptDecryptService.decryptText(params.get('data'));
          console.log('page6-------' + this.stringdata);

          this.p1P2Data = JSON.parse(this.stringdata);

        }
      }
    );
  }

  backPage() {
    this.router.navigate(['/page5', { data: this.encryptDecryptService.encryptText(JSON.stringify(this.p1P2Data)) }]);
  }

}
