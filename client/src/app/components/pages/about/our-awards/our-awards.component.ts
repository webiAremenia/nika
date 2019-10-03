import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
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

    @HostListener('window:resize') onResize() {
        document.querySelectorAll('.award').forEach((it: HTMLElement)  => {
            const elem: any = document.getElementsByClassName('award')[0];
            it.style.height = elem.offsetWidth + 'px';
        });
    }

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        this.content = this.content[0];
        setTimeout( () => {
            document.querySelectorAll('.award').forEach((it: HTMLElement)  => {
                const elem: any = document.getElementsByClassName('award')[0];
                it.style.height = elem.offsetWidth + 'px';
            });
        }, 100);
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

}
