import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from '../../../_services/slider.service';
import {Slide} from '../../../_models/slide';
import {AppGlobals} from '../../../app.globals';
import {Subscription} from 'rxjs';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    options: any;
    speed: any;
    slides: Slide[];
    imageUrl;
    done = false;

    constructor(private  sliderService: SliderService, config: AppGlobals) {
        this.imageUrl = config.imageUrl + '/medias/';
        this.speed = sliderService.speed;
        this.options = {
            loop: true,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 200,
            autoplay: true,
            autoplayTimeout: this.speed || 3000,
            autoplaySpeed: 1000,
            // navText: ['', ''],
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 1
                },
                740: {
                    items: 1
                },
                940: {
                    items: 1
                }
            },
            nav: false
        };

    }

    ngOnInit() {
        this.getParams();
    }

    getParams() {

        if (this.sliderService.slider) {
            this.slides = this.sliderService.slider;
            this.done = true;
        } else {
            this.sliderService.getImages().subscribe(
                d => {
                    this.slides = d;
                    this.done = true;
                }
            );
        }
    }

    ngOnDestroy(): void {
        this.slides = null;
        this.done = false;
    }
}
