import {Component, OnDestroy, OnInit} from '@angular/core';
import {SliderService} from "../../../_services/slider.service";


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    options: any;
    slides: any;

    constructor(private  slider: SliderService) {
    }

    ngOnInit() {
        this.getParams();
    }

    getParams() {
        this.options = this.slider.sliderOptions();
        this.slides = this.slider.getImages();
    }

    ngOnDestroy(): void {
        this.options = null;
        this.slides = null;
    }
}
