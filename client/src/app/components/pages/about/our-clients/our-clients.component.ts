import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {ClientList} from '../../../../_models/team/ClientList';

@Component({
    selector: 'app-our-clients',
    templateUrl: './our-clients.component.html',
    styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit, OnDestroy {
    @Input() content: ClientList;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        this.content = this.content[0];
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }
}
