import {Component, OnInit} from '@angular/core';
import {PageService} from '../../../_services/page.service';
import {Page} from '../../../_models/page';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    pages: Page[];
    done = false;
    page: Page;
    constructor(private service: PageService) {
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        if (this.service.pages) {
            this.pages = this.service.pages;
            this.page = this.pages.find(p => {
                return p.key === 'page_about';
            });
            this.done = true;
        } else {
            this.service.getAll().subscribe(
                data => {
                    this.pages = data;
                    this.page = this.pages.find(p => {
                        return p.key === 'page_about';
                    });
                    this.done = true;
                },
                err => console.log(err)
            );
        }
    }

}
