import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppGlobals} from '../app.globals';
import {catchError, map} from 'rxjs/operators';
import {BehaviorSubject, throwError} from 'rxjs';
import {ContactData} from '../_models/contact/ContactData';
import {ContactResponse} from '../_models/ContactResponse';

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    url;
    contactData = new BehaviorSubject<ContactData[]>([]);

    constructor(private http: HttpClient, private config: AppGlobals) {
        this.url = config.url;
    }

    sendMail(form): any {
        console.log(form.value);
        return this.http.post(`${this.url}/api/contact`, form.value);
    }

    getContactPageData() {
        return this.http.get(`${this.url}/api/contact-form`)
            .pipe(
                map((data: ContactResponse) => {
                        this.contactData.next(data.contacts);
                        return data;
                    },
                    catchError(err => throwError(err))));
    }

    getContactRxData() {
        return this.contactData.asObservable();
    }
}
