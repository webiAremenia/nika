import {Component, Input, OnInit} from '@angular/core';
import {WorkDetails} from '../../../../../_models/work/WorkDetails';
import {OwlOptions} from 'ngx-owl-carousel-o/lib/models/owl-options.model';

@Component({
    selector: 'app-work-slider',
    templateUrl: './work-slider.component.html',
    styleUrls: ['./work-slider.component.scss']
})
export class WorkSliderComponent implements OnInit {

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        dots: false,
        navSpeed: 700,
        navText: ['<i class="fas fa-chevron-circle-left"></i>', '<i class="fas fa-chevron-circle-right"></i>'],
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
        nav: true
    };

    @Input() content: WorkDetails;

    constructor() {
    }

    ngOnInit() {
        console.log(this.content);
    }

}
