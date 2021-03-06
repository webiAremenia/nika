import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

import {ContactService} from '../../../../_services/contact.service';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {ContactData} from '../../../../_models/contact/ContactData';

@Component({
    selector: 'app-new-business',
    templateUrl: './new-business.component.html',
    styleUrls: ['./new-business.component.scss']
})
export class NewBusinessComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    mobileWindowSubscription: Subscription;
    windowSize: ResponsiveData;
    mobileWidth: number;

    done = false;
    contactDataSub: Subscription;
    content: ContactData;

    constructor(private contactService: ContactService,
                private actionsService: ActionsService,
                private route: ActivatedRoute
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
                    if (it.key === 'business') {
                        this.content = it;
                        this.done = true;
                    }
                });
            });
    }

}
