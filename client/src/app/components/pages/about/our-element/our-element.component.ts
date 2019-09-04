import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {WindowSize} from '../../../../_models/WindowSize';
import {ActionsService} from '../../../../_services/actions.service';

@Component({
    selector: 'app-our-element',
    templateUrl: './our-element.component.html',
    styleUrls: ['./our-element.component.scss']
})
export class OurElementComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    windowSize: WindowSize;
    list: NodeListOf<HTMLUListElement>;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: WindowSize) => this.windowSize = size );
    }

    ngOnInit() {
        this.list = document.querySelectorAll('ul');
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

    openList(e) {
        if (e.classList.contains('active')) {
            e.classList.remove('active');
        } else {
            this.list.forEach( list => {
               list.classList.remove('active');
            });
            e.classList.add('active');
        }
    }

}
