import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../../_services/contact.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
    selector: 'app-careers',
    templateUrl: './contact-careers.component.html',
    styleUrls: ['./contact-careers.component.scss']
})
export class ContactCareersComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    mobileWindowSubscription: Subscription;
    windowSize: ResponsiveData;
    mobileWidth: number;

    form: FormGroup;
    done = true;
    emailPattern = '^[a-z0-9._%+-]{5,15}@[a-z0-9.-]+\.[a-z]{2,4}$';
    // fullNamePattern = '^[a-zA-Z0-9 ]{5,15}';
    fullNamePattern = '^([^<>&:"]*[^<>&:"\\s][^<>&:"]*|.{0})$';

    constructor(
        private route: ActivatedRoute,
        private contactService: ContactService,
        private actionsService: ActionsService
    ) {
        actionsService.contactLocationSubject.next(route.snapshot.routeConfig.path.toUpperCase().replace('-', ' '));
        this.initForm();
        this.initSubscriptions();
    }


    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
        this.mobileWindowSubscription.unsubscribe();
    }

    submit() {
        this.contactService.sendMail(this.form).toPromise()
            .then(d => {
                if (d.success) {
                    this.done = true;
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

    // // // INIT DATA // // //

    initForm() {
        this.form = new FormGroup({
            fullName: new FormControl('', [Validators.required, Validators.pattern(this.fullNamePattern)]),
            email: new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]),
            text: new FormControl('')
        });
    }

    initSubscriptions() {
        this.windowSubscription = this.actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.mobileWindowSubscription = this.actionsService.getMobileWindowSize()
            .subscribe(width => this.mobileWidth = width);
    }
}
