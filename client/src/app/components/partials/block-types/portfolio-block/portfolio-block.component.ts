import {Component, Input, OnInit} from '@angular/core';
import {FooterService} from '../../../../_services/footer.service';
import {AppGlobals} from '../../../../app.globals';


@Component({
    selector: 'app-portfolio-block',
    templateUrl: './portfolio-block.component.html',
    styleUrls: ['./portfolio-block.component.sass']
})
export class PortfolioBlockComponent implements OnInit {

    @Input() block;
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
        console.log(this.block);
        this.getPortfel();
    }

    getPortfel() {
        this.footerService.getPortfolioById(this.block.portfolio)
            .subscribe(
                d => {
                    this.done = true;
                    this.portfolio = d;
                    console.log(d);
                },
                e => console.log(e)
            );
    }
}
