import {Component, Inject, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {DOCUMENT} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import {Story} from '../../../../_models/story';
import {StoriesService} from '../../../../_services/stories.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {

  id: number;
  story: Story;
  imgPath = '../../../../assets/images/';
  private routeSubscription: Subscription;

  constructor(
      @Inject(DOCUMENT) private document: Document, private route: ActivatedRoute, private service: StoriesService
  ) {

  }

  ngOnInit() {
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params.id;
      this.story = this.service.getById(this.id);
      console.log(this.story);
    });
  }

}
