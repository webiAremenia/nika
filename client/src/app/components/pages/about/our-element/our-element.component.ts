import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {ElementList} from '../../../../_models/team/ElementList';

@Component({
    selector: 'app-our-element',
    templateUrl: './our-element.component.html',
    styleUrls: ['./our-element.component.scss']
})
export class OurElementComponent implements OnInit, OnDestroy {
    @Input() content: ElementList;
    @ViewChild('list') list: ElementRef;
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

    openList(e, index) {
        const list = e.children;
        const el = e.children[index];
        if (el.classList.contains('active')) {
            el.classList.remove('active');
        } else {
            for (const l of list) {
                l.classList.remove('active');
            }
            el.classList.add('active');
        }
    }

}
