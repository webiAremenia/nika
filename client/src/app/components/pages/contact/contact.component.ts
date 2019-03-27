import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../_services/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    form: FormGroup;

    constructor(private contactService: ContactService) {
        this.form = new FormGroup({
            fullName: new FormControl('', Validators.required),
            email: new FormControl('', [Validators.email, Validators.required]),
            date: new FormControl(''),
            eventName: new FormControl('', [Validators.required, Validators.minLength(5)]),
            text: new FormControl('')
        });
    }

    ngOnInit() {
    }

    submit() {
        if (this.contactService.sendMail(this.form)) {
            this.form.reset();
            for (const key in this.form.controls) {
                if (this.form.controls.hasOwnProperty(key)) {
                    this.form.controls[key].setErrors(null);
                }
            }
        }
    }
}
