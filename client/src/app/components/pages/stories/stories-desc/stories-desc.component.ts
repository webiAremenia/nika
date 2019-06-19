import { Component, OnInit } from '@angular/core';
import {Page} from "../../../../_models/page";
import {PageService} from "../../../../_services/page.service";

@Component({
  selector: 'app-stories-desc',
  templateUrl: './stories-desc.component.html',
  styleUrls: ['./stories-desc.component.scss']
})
export class StoriesDescComponent implements OnInit {

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
            console.log(888888888888888888)
            this.pages = this.service.pages;
            this.page = this.pages.find(p => {
                return p.key === 'page_story';
            });
            this.done = true;
        } else {
            console.log(111111111111111111)
            this.service.getAll().subscribe(
                data => {
                    this.pages = data;
                    this.page = this.pages.find(p => {
                        return p.key === 'page_story';
                    });
                    this.done = true;
                },
                err => console.log(err)
            );
        }
    }

}
