import {Component, Input, OnInit} from '@angular/core';
import {FooterService} from '../../../../_services/footer.service';
import {AppGlobals} from '../../../../app.globals';

@Component({
    selector: 'app-blog-block',
    templateUrl: './blog-block.component.html',
    styleUrls: ['./blog-block.component.scss']
})
export class BlogBlockComponent implements OnInit {

    @Input() block;
    @Input() size;
    customOptions: any = {
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: false,
        dots: true,
        navSpeed: 200,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
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
    stories;
    done;
    imageUrl;
    test = 15;


    constructor(private  service: FooterService, config: AppGlobals) {
        this.imageUrl = config.imageUrl + '/posts/';
    }

    ngOnInit() {
        this.getStories();
    }

    getStories() {
        this.service.getStories(this.block.stories).subscribe(
            d => {
                this.stories = d;
                this.done = true;
            },
            e => console.log(e)
        );
    }
}
