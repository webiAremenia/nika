import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../_models/ResponsiveData';
import {ActionsService} from '../../../_services/actions.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {ContactService} from '../../../_services/contact.service';
import {ContactData} from '../../../_models/contact/ContactData';
import {ContactResponse} from '../../../_models/ContactResponse';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    currentLocationSubscription: Subscription;
    windowSize: ResponsiveData;
    currentLocation: string;
    locationGroup: FormGroup;

    content: ContactData[] = [];

    constructor(private actionsService: ActionsService,
                private route: ActivatedRoute,
                private contactService: ContactService,
                private router: Router
    ) {
        this.currentLocation = router.url.split('/contact/')[1].toUpperCase().replace('-', ' ');
        this.initSubscriptions();

        this.locationGroup = new FormGroup({
            select: new FormControl(`${this.currentLocation}`)
        });
        this.contactService.getContactPageData()
            .subscribe( (data: ContactResponse) => {
                this.content = data.contacts;
            });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
        this.currentLocationSubscription.unsubscribe();
    }

    // // // // // INIT DATA // // // // //

    initSubscriptions() {
        this.windowSubscription = this.actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.currentLocationSubscription = this.actionsService.getContactLocation()
            .subscribe(location => {
                this.locationGroup.reset();
                this.currentLocation = location;
                this.locationGroup = new FormGroup({
                    select: new FormControl(`${this.currentLocation}`)
                });
                console.log(this.currentLocation);
            });
    }

}
