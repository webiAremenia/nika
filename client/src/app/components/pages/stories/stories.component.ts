import {Component, OnInit} from '@angular/core';
import {Story} from '../../../_models/story';
import {StoriesService} from '../../../_services/stories.service';

@Component({
    selector: 'app-stories',
    templateUrl: './stories.component.html',
    styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

    stories: Story[];

    constructor(private service: StoriesService) {
    }

    ngOnInit() {
        this.getAllStories();
    }

    getAllStories() {
        this.stories = this.service.getStories();
        console.log(this.stories);
    }

}
