import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FooterService} from '../../../../_services/footer.service';
import {AppGlobals} from '../../../../app.globals';

@Component({
    selector: 'app-twitter-block',
    templateUrl: './twitter-block.component.html',
    styleUrls: ['./twitter-block.component.scss']
})
export class TwitterBlockComponent implements OnInit {
    @Input() block;
    @Input() size;
    @ViewChild('twitter') twitter: ElementRef;

    // @Input() id;

    constructor(
        private footerService: FooterService,
        config: AppGlobals
    ) {
    }

    ngOnInit() {
    }

}
