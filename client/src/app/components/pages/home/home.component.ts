import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SliderService} from '../../../_services/slider.service';
import {Slide} from '../../../_models/slide';
import {AppGlobals} from '../../../app.globals';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild('customBody') customBody: ElementRef;
    accordionItemsStyles = {
        left: 0,
        width: 0
    };
    mouseWillCount = 0;
    slides: Slide[];
    count;
    slideWidth;
    clickedWidth;
    slidePosition;
    imageUrl;
    done = false;
    clickedSlide = null;
    workScrollTop = 0;

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.initSlider();
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 39 || event.keyCode === 40) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.scrollFunction({deltaY: 100});
            } else {
                this.sliderNext();
            }
        } else if (event.keyCode === 37 || event.keyCode === 38) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.scrollFunction({deltaY: -100});
            } else {
                this.sliderPrev();
            }
        }
    }

    constructor(
        private  sliderService: SliderService, config: AppGlobals,
        private router: Router) {
        this.imageUrl = config.imageUrl + '/medias/';
        console.log('constructor');
    }

    ngOnInit() {
        this.getParams();
        console.log('on   init');
    }

    initCurrent(index) {
        this.slidePosition = this.accordionItemsStyles.left;
        this.clickedSlide = index;
        this.accordionItemsStyles.left = -index * this.slideWidth;
        this.accordionItemsStyles.width = this.accordionItemsStyles.width + 2 * this.slideWidth;
        setTimeout(() => {
            this.navigate(index);
        }, 1400);
    }

    onMouseWheel(event) {
        if (this.clickedSlide || this.clickedSlide === 0) {
        } else {
            this.mouseWillCount++;
            if (this.mouseWillCount === 1) {
                setTimeout(() => {
                    event.deltaY > 0 ? this.sliderNext() : this.sliderPrev();
                    this.mouseWillCount = 0;
                }, 200);
            }
        }
    }

    getParams() {
        if (this.sliderService.slider) {
            this.slides = this.sliderService.slider;
            this.done = true;
            this.initSlider();
        } else {
            this.sliderService.getImages().subscribe(
                d => {
                    this.slides = d;
                    console.log('slider items ', d);
                    this.done = true;
                    this.initSlider();

                },
                e => console.log('errrrr', e)
            );
        }
    }

    initSlider() {
        this.count = this.slides.length;
        this.slideWidth = (window.innerWidth - 115) / 4 - 2;
        this.clickedWidth = this.slideWidth * 3;
        this.accordionItemsStyles.width = this.slideWidth * this.count;
        this.accordionItemsStyles.left = 0;
        this.slidePosition = this.accordionItemsStyles.left;
    }

    resetSlider() {
        this.workScrollTop = 0;
        this.customBody.nativeElement.style.transform = `translate3d(0, 0, 0)`;
        setTimeout(() => {
            this.clickedSlide = null;
            this.accordionItemsStyles.left = this.slidePosition;
            this.accordionItemsStyles.width = this.slideWidth * this.count;
            this.router.navigate(['/']).then();
        }, 1800);
    }

    navigate(index) {
        this.router.navigate([`project/${index}`]).then();
    }

    sliderNext() {
        if (this.accordionItemsStyles.left > -this.accordionItemsStyles.width + this.slideWidth * 3) {
            this.accordionItemsStyles.left -= this.slideWidth;
            this.slidePosition = this.accordionItemsStyles.left;
        }
    }

    sliderPrev() {
        if (this.accordionItemsStyles.left < 0) {
            this.accordionItemsStyles.left += this.slideWidth;
            this.slidePosition = this.accordionItemsStyles.left;
        }
    }

    scrollFunction(event) {
        if (this.clickedSlide || this.clickedSlide === 0) {
            this.mouseWillCount++;
            if (this.mouseWillCount === 1) {
                console.log(event.deltaY);
                setTimeout(() => {
                    if (event.deltaY > 0) {
                        this.workScrollTop = this.workScrollTop > -this.customBody.nativeElement.scrollHeight + 50 ?
                            this.workScrollTop - 50 : -this.customBody.nativeElement.scrollHeight + 50;
                    } else {
                        this.workScrollTop = this.workScrollTop < 0 ? this.workScrollTop + 50 : 0;
                    }
                    this.customBody.nativeElement.style.transform = `translate3d(0, ${this.workScrollTop}px, 0)`;
                    this.mouseWillCount = 0;
                }, 10);
            }
        } else {
        }
    }

    ngOnDestroy(): void {
        console.log('destroy');
    }
}
