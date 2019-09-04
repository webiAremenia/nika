import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';

@Component({
    selector: 'app-our-element',
    templateUrl: './our-element.component.html',
    styleUrls: ['./our-element.component.scss']
})
export class OurElementComponent implements OnInit, OnDestroy {
    windowSubscription: Subscription;
    windowSize: ResponsiveData;
    list: NodeListOf<HTMLUListElement>;

    constructor(private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size );
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
