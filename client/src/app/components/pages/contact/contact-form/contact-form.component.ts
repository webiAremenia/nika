import {AfterContentInit, AfterViewInit, Component, HostListener, Input, OnInit} from '@angular/core';
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

    emailPattern = '^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\\-+)|([A-Za-z0-9]+\\.+)|([A-Za-z0-9]+\\++))*[A-Za-z0-9]+@((\\w+\\-+)|(\\w+\\.))*\\w{1,63}\\.[a-zA-Z]{2,6})$';
    fullNamePattern = '^[a-z0-9_-]{4,15}$';
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
        document.getElementsByTagName('ul')[0].style.top = this.height - window.pageYOffset + 'px';
    }
    @HostListener('window:resize') onResize() {
        this.height = document.getElementsByTagName('ul')[0].offsetTop;
        document.getElementsByTagName('ul')[0].style.top = this.height - window.pageYOffset + 'px';
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
        document.getElementsByClassName('iti__selected-flag')[0].addEventListener('click', () => {
            this.height = document.getElementsByTagName('ul')[0].offsetTop;
            document.getElementsByTagName('ul')[0].style.top = this.height - window.pageYOffset + 'px';
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

