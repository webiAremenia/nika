import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {WindowSize} from '../../../../_models/WindowSize';
import {ActionsService} from '../../../../_services/actions.service';

@Component({
    selector: 'app-leadership',
    templateUrl: './leadership.component.html',
    styleUrls: ['./leadership.component.scss']
})
export class LeadershipComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    windowSize: WindowSize;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: WindowSize) => this.windowSize = size );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

}
