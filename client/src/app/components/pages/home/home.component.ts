import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SliderService} from '../../../_services/slider.service';
import {Slide} from '../../../_models/slide';
import {AppGlobals} from '../../../app.globals';
import {Router} from '@angular/router';

console.log('home component');

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild('mainSlider') mainSlider;

    options: any;
    speed: any;
    slides: Slide[];
    imageUrl;
    done = false;
    sliderPosition = 0;
    animated = false;

    constructor(private  sliderService: SliderService, config: AppGlobals, private router: Router) {
        this.imageUrl = config.imageUrl + '/medias/';
        this.speed = sliderService.speed;
        this.options = {
            animateOut: 'fadeOut',
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            dots: false,
            navSpeed: 200,
            autoplay: false,
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
                    items: 3
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
                    console.log('sliders ', d);
                    this.done = true;
                }
            );
        }
    }

    animateDesc(e) {
        // e.target.children[0].classList.add('animate-height');
    }

    animateDescHide(e) {
        // e.target.children[0].classList.remove('animate-height');
    }

    navigate(url) {
        this.router.navigate([`project`]).then();
    }

    sliderNext() {
        if ((this.sliderPosition + 3) > this.slides.length - 1) {
            this.sliderPosition = this.slides.length - 3;
        } else {
            this.sliderPosition += 3;
        }
        this.mainSlider.to('slide-' + this.sliderPosition);
    }

    sliderPrev() {
        if ((this.sliderPosition - 3) < 0) {
            this.sliderPosition = 0;
        } else {
            this.sliderPosition -= 3;
        }
        this.mainSlider.to('slide-' + this.sliderPosition);
    }

    ngOnDestroy(): void {
        this.slides = null;
        this.done = false;
    }
}
