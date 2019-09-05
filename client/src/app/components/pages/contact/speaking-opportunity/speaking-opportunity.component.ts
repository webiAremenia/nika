import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../../../_services/contact.service';

@Component({
    selector: 'app-speaking-opportunity',
    templateUrl: './speaking-opportunity.component.html',
    styleUrls: ['./speaking-opportunity.component.scss']
})
export class SpeakingOpportunityComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    form: FormGroup;
    done = true;
    emailPattern = '^[a-z0-9._%+-]{5,15}@[a-z0-9.-]+\.[a-z]{2,4}$';
    // fullNamePattern = '^[a-zA-Z0-9 ]{5,15}';
    fullNamePattern = '^([^<>&:"]*[^<>&:"\\s][^<>&:"]*|.{0})$';

    constructor(private contactService: ContactService, private actionsService: ActionsService) {
        this.form = new FormGroup({
            fullName: new FormControl('', [Validators.required, Validators.pattern(this.fullNamePattern)]),
            email: new FormControl('', [Validators.email, Validators.required, Validators.pattern(this.emailPattern)]),
            phone: new FormControl(''),
            companyName: new FormControl('', [Validators.required, Validators.minLength(5)]),
            text: new FormControl('')
        });
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

    submit() {
        this.done = false;
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
}
