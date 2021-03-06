import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {Remark} from '../../../../_models/team/Remark';

@Component({
    selector: 'app-remark',
    templateUrl: './remark.component.html',
    styleUrls: ['./remark.component.scss']
})
export class RemarkComponent implements OnInit, OnDestroy {
    @Input() content: Remark;
    windowSize: ResponsiveData;
    windowSubscription: Subscription;

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
