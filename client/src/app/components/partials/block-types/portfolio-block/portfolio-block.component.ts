import {Component, Input, OnInit} from '@angular/core';
import {FooterService} from '../../../../_services/footer.service';
import {AppGlobals} from '../../../../app.globals';


@Component({
    selector: 'app-portfolio-block',
    templateUrl: './portfolio-block.component.html',
    styleUrls: ['./portfolio-block.component.scss']
})
export class PortfolioBlockComponent implements OnInit {

    @Input() block;
    @Input() size;
    @Input() bgColor;
    portfolio;
    imageUrl;
    done = false;

    constructor(
        private footerService: FooterService,
        config: AppGlobals
        ) {
        this.imageUrl = config.imageUrl + '/portfolio/';
    }

    ngOnInit() {
        this.getPortfolio();
    }

    getPortfolio() {
        this.footerService.getPortfolioById(this.block.portfolio)
            .subscribe(
                d => {
                    this.done = true;
                    this.portfolio = d;
                },
                e => console.log(e)
            );
    }
}
