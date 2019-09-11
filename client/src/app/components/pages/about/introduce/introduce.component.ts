import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActionsService} from '../../../../_services/actions.service';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {Introduce} from '../../../../_models/team/Introduce';

@Component({
    selector: 'app-introduce',
    templateUrl: './introduce.component.html',
    styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit, OnDestroy {
    @Input() content: Introduce;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        // console.log(this.content);
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

}
