import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../../_models/ResponsiveData';
import {ActionsService} from '../../../../_services/actions.service';
import {ClientList} from '../../../../_models/team/ClientList';

@Component({
    selector: 'app-our-clients',
    templateUrl: './our-clients.component.html',
    styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit, OnDestroy {
    @Input() content: ClientList;
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    @HostListener('window:resize') onResize() {
        document.querySelectorAll('.partner').forEach((it: HTMLElement) => {
            const elem: any = document.getElementsByClassName('partner')[0];
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
            document.querySelectorAll('.partner').forEach((it: HTMLElement)  => {
                const elem: any = document.getElementsByClassName('partner')[0];
                it.style.height = elem.offsetWidth + 'px';
            });
        }, 100);
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }
}
