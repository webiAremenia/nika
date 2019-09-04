import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {WindowSize} from '../../../../_models/WindowSize';
import {ActionsService} from '../../../../_services/actions.service';

@Component({
    selector: 'app-our-clients',
    templateUrl: './our-clients.component.html',
    styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    windowSize: WindowSize;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: WindowSize) => this.windowSize = size);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }
}