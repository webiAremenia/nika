import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Post} from "../../../_models/post";
import {ComponentService} from "../../../_services/component.service";

import {Inject} from "@angular/core";
import {DOCUMENT} from '@angular/platform-browser';

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

    blog: Post;
    id: number;
    private routeSubscription: Subscription;

    constructor(@Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, private servic: ComponentService) {

    }

    ngOnInit() {
        this.routeSubscription = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.blog = this.servic.getPost(this.id);
            window.scrollTo(0, 0);
        });
    }

}
