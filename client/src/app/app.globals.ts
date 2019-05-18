import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGlobals {
  port = '3000';
  protocol = 'http';
  hostname = 'localhost' + ':' + this.port;
  // hostname = 'nika.webi.am';
  url = this.protocol + '://' + this.hostname ;
  imageUrl = this.protocol + '://' + this.hostname +  '/uploads';
  constructor() {}
}
