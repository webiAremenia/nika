import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActionsService} from '../../../../_services/actions.service';
import {WindowSize} from '../../../../_models/WindowSize';

@Component({
    selector: 'app-introduce',
    templateUrl: './introduce.component.html',
    styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit, OnDestroy {
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
