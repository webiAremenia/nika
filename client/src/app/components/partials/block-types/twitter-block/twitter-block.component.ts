import {Component, Input, OnInit} from '@angular/core';
import {FooterService} from "../../../../_services/footer.service";
import {AppGlobals} from "../../../../app.globals";

@Component({
    selector: 'app-twitter-block',
    templateUrl: './twitter-block.component.html',
    styleUrls: ['./twitter-block.component.sass']
})
export class TwitterBlockComponent implements OnInit {
    @Input() block;
    @Input() size;
    // @Input() id;

    constructor(
        private footerService: FooterService,
        config: AppGlobals
    ) {
    }

    ngOnInit() {
        console.log(this.block)
    }

}
