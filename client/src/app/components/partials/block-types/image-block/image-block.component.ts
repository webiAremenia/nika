import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FooterService} from '../../../../_services/footer.service';
import {AppGlobals} from '../../../../app.globals';

@Component({
    selector: 'app-image-block',
    templateUrl: './image-block.component.html',
    styleUrls: ['./image-block.component.scss']
})
export class ImageBlockComponent implements OnInit {

    @Input() block;
    @Input() size;
    @ViewChild(`audioElement`) audioElement: ElementRef;
    hover = false;
    imageUrl;
    play = false;

    constructor(
        private footerService: FooterService,
        config: AppGlobals
    ) {
        this.imageUrl = config.imageUrl + '/block/';
        this.play = true;
    }


    ngOnInit() {
        setTimeout(() => {
            this.play = false;
        }, 100);
    }

    toggleAutoplay() {
        this.play = !this.play;
        if (this.audioElement) {
            this.play ? this.audioElement.nativeElement.play() : this.audioElement.nativeElement.pause();
        }
    }

}
