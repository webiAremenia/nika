import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ContactService {

    constructor() {
    }

    sendMail(mail): boolean {
        console.log(mail.value);
        return true;
    }
}
