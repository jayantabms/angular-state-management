import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {
  textToConvert: string;
  password = 'test';

  constructor() { }

  encryptText(data: string) {

    return CryptoJS.AES.encrypt(data, this.password.trim()).toString();

  }

  decryptText(data: string) {
    return CryptoJS.AES.decrypt(data, this.password.trim()).toString(CryptoJS.enc.Utf8);
  }

}
