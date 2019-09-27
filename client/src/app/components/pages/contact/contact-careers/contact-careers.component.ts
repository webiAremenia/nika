import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {ContactService} from '../../../../_services/contact.service';
import {ContactData} from '../../../../_models/contact/ContactData';

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

    done = false;
    contactDataSub: Subscription;
    content: ContactData;

    constructor(
        private route: ActivatedRoute,
        private contactService: ContactService,
        private actionsService: ActionsService
    ) {
        actionsService.contactLocationSubject.next(route.snapshot.routeConfig.path.toUpperCase().replace('-', ' '));
        this.initSubscriptions();
    }


    ngOnInit() {
    }

    ngOnDestroy() {
        this.contactDataSub.unsubscribe();
        this.windowSubscription.unsubscribe();
        this.mobileWindowSubscription.unsubscribe();
    }

    // // // INIT DATA // // //

    initSubscriptions() {
        this.windowSubscription = this.actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
        this.mobileWindowSubscription = this.actionsService.getMobileWindowSize()
            .subscribe(width => this.mobileWidth = width);
        this.contactDataSub = this.contactService.getContactRxData()
            .subscribe(data => {
                data.forEach(it => {
                    if (it.key === 'careers') {
                        this.content = it;
                        this.done = true;
                    }
                });
            });
    }
}
