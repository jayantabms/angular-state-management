import { Page1Data } from './../../model/Page1Data';
import { P1P2Data } from './../../model/P1P2Data';
import { Injectable } from '@angular/core';
import { Page2Data } from 'src/app/model/Page2Data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  p1p2data = new P1P2Data();

  constructor() {
    if (typeof (Storage) !== 'undefined') {
      if (sessionStorage.page1data) {
        this.p1p2data.page1data = JSON.parse(sessionStorage.page1data);
      }
      if (sessionStorage.page2data) {
        this.p1p2data.page2data = JSON.parse(sessionStorage.page2data);
      }
    }
  }
  setPage1Data(data: Page1Data) {
    this.p1p2data.page1data = data;
    sessionStorage.setItem('page1data', JSON.stringify(data));

  }

  getPage1Data() {
    return this.p1p2data.page1data;
  }

  setPage2Data(data: Page2Data) {
    this.p1p2data.page2data = data;
    sessionStorage.setItem('page2data', JSON.stringify(data));

  }

  getPage2Data() {
    return this.p1p2data.page2data;
  }

}
