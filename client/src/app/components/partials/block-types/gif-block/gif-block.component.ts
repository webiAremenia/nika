import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FooterService} from '../../../../_services/footer.service';
import {AppGlobals} from '../../../../app.globals';

@Component({
  selector: 'app-gif-block',
  templateUrl: './gif-block.component.html',
  styleUrls: ['./gif-block.component.scss']
})
export class GifBlockComponent implements OnInit {

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
  }


  ngOnInit() {
  }

  toggleAutoplay() {
    this.play = !this.play;
    if (this.audioElement) {
      this.play ? this.audioElement.nativeElement.play() : this.audioElement.nativeElement.pause();
    }
  }


}
