import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor() {
    }

    sendMail(mail) {
        console.log(mail.value);
    }
}
