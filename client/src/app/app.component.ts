import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {ComponentService} from './_services/component.service';
import {FooterService} from './_services/footer.service';
import {SliderService} from './_services/slider.service';
import {ActionsService} from './_services/actions.service';


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
        private actionsService: ActionsService,
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

    @HostListener('window:resize', ['$event']) onResize(e) {
        if (window.innerWidth > 767) {
            const size = {
                width: window.innerWidth > 1920 ?  1920 : window.innerWidth,
                height: window.innerHeight,
                rate:
                    window.innerWidth >= 1920 ? 1 :
                        window.innerWidth < 1520 && window.innerWidth > 1220 ? 1.20 :
                            window.innerWidth < 1220 && window.innerWidth > 1020 ? 1.25 :
                                window.innerWidth < 1020 && window.innerWidth > 820 ? 1.30 : 1
            };
            this.actionsService.responsiveData.next(size);
        }
    }


    onActivate(event) {
        window.scroll(0, 0);
    }
}
