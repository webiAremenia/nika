import {AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
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
export class ContactFormComponent implements OnInit, AfterViewInit {
    windowSubscription: Subscription;
    mobileWindowSubscription: Subscription;
    windowSize: ResponsiveData;
    mobileWidth: number;

    // emailPattern = '^[a-z0-9._%+-]{5,15}@[a-z0-9.-]+\.[a-z]{2,4}$';
    // fullNamePattern = '^[a-zA-Z0-9 ]{5,15}';
    // fullNamePattern = '^([^<>&:"]*[^<>&:"\\s][^<>&:"]*|.{0})$';
    // companyPattern = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\\s).*$';


    form: FormGroup;
    done = false;
    // emailPattern = '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$';
    // fullNamePattern = '^(?! )(?!.* $)[a-zA-Z+\\s.][a-zA-Z-_\\s.]{1,20}';
    // companyPattern = '(?! )(?!.* $)[\\w.\\s.]{3,20}$';
    // phonePattern = '^[0-9]{5,15}$';

    emailPattern = '^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\\-+)|([A-Za-z0-9]+\\.+)|([A-Za-z0-9]+\\++))*' +
        '[A-Za-z0-9]+@((\\w+\\-+)|(\\w+\\.))*\\w{1,63}\\.[a-zA-Z]{2,6})$';
    fullNamePattern = '^[a-zA-Z 0-9_-]{4,20}$';
    companyPattern = '(?! )(?!.* $)[\\w.\\s.]{4,20}$';
    phonePattern = '^[0-9]{5,15}$';

    height: number;

    currentCountryPhone = 1;

    @Input() type: string;

    constructor(
        private contactService: ContactService,
        private actionsService: ActionsService,
        private formBuilder: FormBuilder
    ) {
        this.initSubscriptions();
    }

    @HostListener('document: scroll') mouseWheel() {
        if (document.getElementsByTagName('ul')[0]) {
            document.getElementsByTagName('ul')[0].style.top = this.height - window.pageYOffset + 'px';
        }
    }

    @HostListener('window: resize') onResize() {
        if (!document.getElementsByClassName('iti__country-list')[0].classList.contains('iti__hide')) {
            const closeInput: HTMLElement = document.getElementsByClassName('iti__selected-flag')[0] as HTMLElement;
            closeInput.click();
        }
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

    ngAfterViewInit() {
        const phoneDiv = document.getElementsByClassName('iti__selected-flag')[0];
        if (phoneDiv) {
            phoneDiv.addEventListener('click', ($event: any) => {
                this.height = $event.pageY + 10;
                document.getElementsByTagName('ul')[0].style.top = this.height - window.pageYOffset + 'px';
            });
        }
    }

    onCountryChange(e) {
        this.form.reset();
        this.currentCountryPhone = parseInt(e.dialCode, 10);
    }

    submit() {
        const phone = 'phone';
        this.form.value[phone] = '+' + this.currentCountryPhone + this.form.value[phone];
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

