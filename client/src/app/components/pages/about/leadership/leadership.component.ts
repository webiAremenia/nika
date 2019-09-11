import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {Lidership} from '../../../../_models/team/Lidership';

@Component({
    selector: 'app-leadership',
    templateUrl: './leadership.component.html',
    styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit, OnDestroy {
    @Input() content: Lidership;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

}
