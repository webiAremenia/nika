import {Component, HostListener, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';
import {Location} from '@angular/common';
import {ComponentService} from './_services/component.service';
import {FooterService} from './_services/footer.service';
import {SliderService} from "./_services/slider.service";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'nika';
    slider = false;
    contact = false;
    route: string;
    path;
    done = false;

    @HostListener('scroll') scrolling() {
        console.log('scrolling');
    }

    constructor(
        location: Location,
        router: Router,
        componentService: ComponentService,
        private footerService: FooterService,
        private  sliderService: SliderService
    ) {
        // componentService.getBlocks();
        // router.events.subscribe((val) => {
        //     if (val instanceof RouterEvent) {
        //         if (val.url.indexOf('/work/') >= 0) {
        //             this.path = '/works';
        //         } else if (val.url.indexOf('/story/') >= 0) {
        //             this.path = '/stories';
        //         } else {
        //             this.path = location.path();
        //         }
        //     }
        // });

    }

    ngOnInit() {
        this.footerService.getGroups().subscribe(
            d => this.done = d
        );
        this.sliderService.getImages().subscribe();
        this.sliderService.getSliderSpeed().subscribe();
    }

    onActivate(event) {
        window.scroll(0, 0);
    }
}
