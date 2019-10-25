import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Logo} from '../_models/logo';

@Injectable({
  providedIn: 'root'
})
export class LogoService {

  logo: Logo[];
  url;
  speed;

  constructor(private http: HttpClient, private config: AppGlobals) {
    this.url = `${config.url}/api`;
  }

  getImages(): Observable<Logo[]> {
    return this.http.get<any[]>(`${this.url}/logo`)
        .pipe(map(data => {
              this.logo = data.map(logo => {
                return {
                  color: logo.bgColor,
                  title: logo.title,
                  image: logo.img,
                };
              });
              return this.logo;
            }),
            catchError(err => {
              console.log(err);
              return throwError(err);
            })
        );
  }
}
