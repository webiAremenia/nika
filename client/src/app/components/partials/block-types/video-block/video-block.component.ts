import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../../app.globals';

@Component({
    selector: 'app-video-block',
    templateUrl: './video-block.component.html',
    styleUrls: ['./video-block.component.scss']
})
export class VideoBlockComponent implements OnInit{

    @Input() block;
    @ViewChild(`videoElement`) videoElement: ElementRef;
    @ViewChild(`videoElementMob`) videoElementMob: ElementRef;
    @ViewChild(`videoLogo`) videoLogo: ElementRef;
    @ViewChild(`videoLogoMob`) videoLogoMob: ElementRef;

    play = false;
    muted = true;
    videoUrl;

    constructor(config: AppGlobals) {
        this.videoUrl = config.imageUrl + '/block/';
        // this.play = true;
    }

    ngOnInit() {

    }

    toggleAutoplay() {
        this.muted = !this.muted;
        this.play = !this.play;
        // this.play ? this.videoElement.nativeElement.play().then() : this.videoElement.nativeElement.pause();
        this.play ? this.videoLogo.nativeElement.style.display = 'none' : this.videoLogo.nativeElement.style.display = 'block';
        // this.play ? this.videoElementMob.nativeElement.play() : this.videoElementMob.nativeElement.pause();
        this.play ? this.videoLogoMob.nativeElement.style.display = 'none' : this.videoLogoMob.nativeElement.style.display = 'block';
    }

}
