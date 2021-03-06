import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {BlockList} from '../../../../_models/team/BlockList';

@Component({
    selector: 'app-our-awards',
    templateUrl: './our-awards.component.html',
    styleUrls: ['./our-awards.component.scss']
})
export class OurAwardsComponent implements OnInit, OnDestroy {
    @Input() content: BlockList;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    @HostListener('window:resize') onResize() {
        document.querySelectorAll('.award').forEach((it: HTMLElement)  => {
            const elem: any = document.getElementsByClassName('award')[0];
            it.style.height = elem.offsetWidth + 'px';
            it.style.backgroundSize = Math.floor(elem.offsetWidth / 2.6) + 'px';
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
                it.style.backgroundSize = Math.floor(elem.offsetWidth / 2.6) + 'px';
            });
        }, 100);
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

}
