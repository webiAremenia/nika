import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../../_services/contact.service';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {Subscription} from 'rxjs';
import {ActionsService} from '../../../../_services/actions.service';



@Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    windowSubscription: Subscription;
    mobileWindowSubscription: Subscription;
    windowSize: ResponsiveData;
    mobileWidth: number;

    // emailPattern = '^[a-z0-9._%+-]{5,15}@[a-z0-9.-]+\.[a-z]{2,4}$';
    // fullNamePattern = '^[a-zA-Z0-9 ]{5,15}';
    // fullNamePattern = '^([^<>&:"]*[^<>&:"\\s][^<>&:"]*|.{0})$';

    form: FormGroup;
    done = false;
    emailPattern = '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$';
    fullNamePattern = '^[a-zA-Z][a-zA-Z-_\\.]{1,20}$';
    // companyPattern = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$';
    companyPattern = '\\w{3,20}$';
    phonePattern = '^[0-9]{5,15}$';

    currentCountryPhone = 1;

    @Input() type: string;

    constructor(
        private contactService: ContactService,
        private actionsService: ActionsService,
        private formBuilder: FormBuilder
    ) {
        this.initSubscriptions();
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            type: [`${this.type}`],
            fullName: ['', [Validators.required, Validators.pattern(this.fullNamePattern)]],
            email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
            phone: [null, [Validators.required, Validators.pattern(this.phonePattern)]],
            companyName: ['', [Validators.required, Validators.pattern(this.companyPattern)]],
            text: ['', [Validators.required]]
        });
    }

    onCountryChange(e) {
        this.form.reset();
        this.currentCountryPhone = parseInt(e.dialCode, 10);
    }

    submit() {
        this.form.value['phone'] =  '+' + this.currentCountryPhone + this.form.value['phone'];
        this.done = true;
        this.contactService.sendMail(this.form).toPromise()
            .then(d => {
                console.log(d);
                if (d.success) {
                    this.done = false;
                    this.form.reset();
                    for (const key in this.form.controls) {
                        if (this.form.controls.hasOwnProperty(key)) {
                            this.form.controls[key].setErrors(null);
                        }
                    }
                }
            })
            .catch(e => console.log(e));
    }

    initSubscriptions() {
        this.windowSubscription = this.actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.mobileWindowSubscription = this.actionsService.getMobileWindowSize()
            .subscribe(width => this.mobileWidth = width);
    }

}

