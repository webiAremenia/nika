import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../../_services/actions.service';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';

@Component({
    selector: 'app-work-text',
    templateUrl: './work-text.component.html',
    styleUrls: ['./work-text.component.scss']
})
export class WorkTextComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    @Input() content: WorkDetails;

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
