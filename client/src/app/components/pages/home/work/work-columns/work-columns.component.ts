import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../../_models/ResponsiveData';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';
import {ActionsService} from '../../../../../_services/actions.service';

@Component({
    selector: 'app-work-columns',
    templateUrl: './work-columns.component.html',
    styleUrls: ['./work-columns.component.scss']
})
export class WorkColumnsComponent implements OnInit, OnDestroy {
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
