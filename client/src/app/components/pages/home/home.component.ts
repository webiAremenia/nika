import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SliderService} from '../../../_services/slider.service';
import {Slide} from '../../../_models/slide';
import {AppGlobals} from '../../../app.globals';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkService} from '../../../_services/work.service';
import {Work} from '../../../_models/work';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild('customBody') customBody: ElementRef;
    @ViewChild('image') image: ElementRef;
    accordionItemsStyles = {
        left: 0,
        width: 0
    };
    mouseWillCount = 0;
    slides: Work[];
    count;
    slideWidth;
    clickedWidth = 0;
    imageUrl;
    done = false;
    clickedSlide = null;
    workScrollTop = -window.innerHeight + 100;
    detailWrapperLeft = 15;
    detailWrapperHeight;
    bannerHeight;
    lastIndex;
    zoomed = 100;

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
        private activatedRoute: ActivatedRoute,
        private  workService: WorkService, config: AppGlobals,
        private router: Router) {
        this.imageUrl = config.imageUrl + '/portfolio/';
    }

    ngOnInit() {
        this.getParams();
    }

    initCurrent(index) {
        this.detailWrapperHeight = (window.innerHeight - 100);
        // console.log(this.detailWrapperHeight);
        this.lastIndex = index;
        this.clickedSlide = index;
        document.getElementById('wwww').style.display = 'block';
        this.detailWrapperLeft = (index + this.accordionItemsStyles.left / this.slideWidth) * this.slideWidth;
        this.clickedWidth = this.slideWidth;
        setTimeout(() => {
            this.zoomed = 150;
            this.detailWrapperLeft = 0;
            this.clickedWidth = this.slideWidth * 3;

        }, 100);
        setTimeout(() => {
            this.detailWrapperHeight = null;
            this.navigate(index);
        }, 1400);
        setTimeout(() => {
            console.log(this.image.nativeElement.clientHeight,  window.innerHeight - 100);
            this.bannerHeight = this.image.nativeElement.clientHeight < window.innerHeight - 100 ?
                window.innerHeight - 100 : this.image.nativeElement.clientHeight;
        }, 1480);
    }

    resetSlider() {
        this.zoomed = 100;
        this.detailWrapperHeight = (window.innerHeight - 100);
        console.log(this.detailWrapperHeight);
        this.detailWrapperLeft = (this.lastIndex + this.accordionItemsStyles.left / this.slideWidth) * this.slideWidth;
        this.clickedWidth = this.slideWidth;
        this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 100}px, 0)`;
        // this.clickedWidth = 0;
        setTimeout(() => {
            this.clickedSlide = null;
            this.router.navigate(['/']).then();
            document.getElementById('wwww').style.display = 'none';
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

    initSlider() {
        this.count = this.slides.length;
        this.slideWidth = (window.innerWidth - 115) / 4;
        // this.clickedWidth = this.slideWidth;
        this.accordionItemsStyles.width = this.slideWidth * this.count;
        this.accordionItemsStyles.left = 0;
    }

    navigate(index) {
        this.workService.current = this.slides[index];
        this.router.navigate([`project/${this.slides[index].id}`]).then();
    }

    sliderNext() {
        if (this.accordionItemsStyles.left > -this.accordionItemsStyles.width + this.slideWidth * 3) {
            this.accordionItemsStyles.left -= this.slideWidth;
        }
    }

    sliderPrev() {
        if (this.accordionItemsStyles.left < 0) {
            this.accordionItemsStyles.left += this.slideWidth;
        }
    }

    pageNext() {

    }

    pagePrev() {

    }

    scrollFunction(event) {
        const workHeight = this.customBody.nativeElement.scrollHeight;
        if (this.clickedSlide || this.clickedSlide === 0) {
            this.mouseWillCount++;
            if (this.mouseWillCount === 1) {
                // console.log(event.deltaY);
                setTimeout(() => {
                    // console.log(this.workScrollTop, -workHeight);
                    if (event.deltaY > 0) {
                        this.workScrollTop = this.workScrollTop > -workHeight ?
                            this.workScrollTop - 100 : -this.customBody.nativeElement.scrollHeight;
                    } else {
                        this.workScrollTop = this.workScrollTop < -window.innerHeight + 100 ?
                            this.workScrollTop + 100 : -window.innerHeight + 100;
                    }
                    this.customBody.nativeElement.style.transform = `translate3d(0, ${this.workScrollTop}px, 0)`;
                    this.mouseWillCount = 0;
                }, 10);
            }
        } else {
        }
    }

    getParams() {
        if (this.workService.works) {
            this.slides = this.workService.works;
            this.done = true;
            this.initSlider();
        } else {
            this.workService.getWorks().subscribe(
                d => {
                    this.slides = d;
                    console.log('slider items ', d);
                    this.done = true;
                    this.initSlider();
                    this.getCurrent();
                },
                e => console.log('errrrr', e)
            );
        }
    }

    getCurrent() {
        const pathObj = location.pathname.split('/');
        // console.log(pathObj);
        if (pathObj.length > 1 && pathObj[1] === 'project') {
            this.slides.forEach((work, index) => {
                if (work.id.toString() === pathObj[2]) {
                    setTimeout(() => {
                        this.initCurrent(index);
                    }, 200);
                }
            });
        }
    }

    ngOnDestroy(): void {
        console.log('destroy');
    }
}
