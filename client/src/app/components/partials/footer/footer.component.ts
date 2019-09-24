import {Component, OnInit} from '@angular/core';
import {FooterService} from '../../../_services/footer.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    footerText;
    footerLink;

    constructor(private footerService: FooterService) {
    }

    ngOnInit() {
        // this.getFooterBlock();
    }

    getFooterBlock() {
        // this.footerService.getFooter().subscribe(date => {
        //     this.footerText = date || 'You  can update this content in admin panel Settings/key = footer-text';
        // });
        // this.footerService.getFooterLink().subscribe(date => {
        //     this.footerLink = date || 'You  can update this content in admin panel Settings/key = footer-link-url';
        // });
    }
}
