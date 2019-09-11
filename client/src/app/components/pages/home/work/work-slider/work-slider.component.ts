import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o/lib/models/owl-options.model';
import {WorkSlider} from '../../../../../_models/work/WorkSlider';

@Component({
    selector: 'app-work-slider',
    templateUrl: './work-slider.component.html',
    styleUrls: ['./work-slider.component.scss']
})
export class WorkSliderComponent implements OnInit {
    @ViewChild('workSlider') workSlider;
    @Input() content: WorkSlider;
    sliderHeight;
    sliderWidth;

    customOptions: OwlOptions = {
        loop: true,
        nav: false,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        // navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
        },
    };

    constructor() {
    }

    ngOnInit() {
        this.initSizes();
        console.log(this.content);
    }

    initSizes() {
        if (this.content.size === 'big') {
            this.sliderHeight = window.innerWidth * 600 / 1920 + 'px';
            this.sliderWidth = '100%';
        } else {
            this.sliderHeight = window.innerWidth * 380 / 1920 + 'px';
            this.sliderWidth = window.innerWidth * 350 / 1920 + 'px';
        }
    }

    nextSlide() {
        this.workSlider.next();
    }

    prevSlide() {
        this.workSlider.prev();
    }

}
