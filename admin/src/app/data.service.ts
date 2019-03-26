import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
// url = window.location.origin;
url = 'http://localhost:3000';
user;
  constructor(private http: HttpClient) { }

  getToken(): string {
    if (localStorage.getItem('token')) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }
  login(data) {
    return this.http.post(this.url + '/api/auth/login', data);
  }
}
