import {Component, OnInit} from '@angular/core';
import {PageService} from "../../../_services/page.service";
import {Page} from "../../../_models/page";

@Component({
    selector: 'app-careers',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss']
})
export class CareersComponent implements OnInit {
    pages: Page[];
    page: Page;
    done = false;

    constructor(private service: PageService) {
    }

    ngOnInit() {
        console.log('***********')
        this.getAll();
    }

    getAll() {
        if (this.service.pages) {
            this.pages = this.service.pages;
            this.page = this.pages.find(p => {
                return p.key === 'page_careers';
            });
            this.done = true;
        } else {
            this.service.getAll().subscribe(
                data => {
                    this.pages = data;
                    console.log(this.pages)
                    this.page = this.pages.find(p => {
                        return p.key === 'page_careers';
                    });
                    console.log(this.page)
                    this.done = true;
                },
                err => console.log(err)
            );
        }
    }

}
