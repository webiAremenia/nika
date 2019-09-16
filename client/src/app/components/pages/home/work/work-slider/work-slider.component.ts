import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import {WorkSlider} from '../../../../../_models/work/WorkSlider';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';

@Component({
    selector: 'app-work-slider',
    templateUrl: './work-slider.component.html',
    styleUrls: ['./work-slider.component.scss']
})
export class WorkSliderComponent implements OnInit {
    @ViewChild('workSlider') workSlider;
    // @Input() content: WorkSlider;
    @Input() content: WorkDetails;
    @Input() index: number;
    sliderHeight;
    sliderWidth;
    done = false;
    customOptions: OwlOptions;

    constructor() {
    }

    ngOnInit() {
        setTimeout(() => {
        this.initSizes();
        }, 200);
        // console.log(window.innerWidth, this.index);
    }

    initSizes() {
        console.log('init size');
        if (window.innerWidth > 768) {
            if (this.content.size === 'big') {
                this.sliderHeight = window.innerWidth * 600 / 1920 + 'px';
                this.sliderWidth = '100%';
            } else {
                this.sliderHeight = window.innerWidth * 380 / 1920 + 'px';
                this.sliderWidth = window.innerWidth * 350 / 1920 + 'px';
            }
        } else {
            if (this.content.size === 'big') {
                this.sliderHeight = window.innerWidth * .5 + 'px';
                this.sliderWidth = window.innerWidth * .8 + 'px';
            } else {
                this.sliderHeight = window.innerWidth * 350 / 720 + 'px';
                this.sliderWidth = window.innerWidth * 380 / 720 + 'px';
            }
        }

        this.customOptions = {
            loop: true,
            nav: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            navSpeed: 700,
            // navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
            responsive: {
                10: {
                    items: 1
                },
                320: {
                    items: 1
                },
                767: {
                    items: 1
                },
            },
        };
        this.done = true;
    }

    nextSlide() {
        // console.log(555);
        this.workSlider.next();
    }

    prevSlide() {
        this.workSlider.prev();
    }

}
