import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {Awards} from '../../../../_models/team/Awards';

@Component({
    selector: 'app-our-awards',
    templateUrl: './our-awards.component.html',
    styleUrls: ['./our-awards.component.scss']
})
export class OurAwardsComponent implements OnInit, OnDestroy {
    @Input() content: Awards;
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
