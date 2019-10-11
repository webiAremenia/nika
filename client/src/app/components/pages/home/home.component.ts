import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AppGlobals} from '../../../app.globals';
import {ActivatedRoute, Router} from '@angular/router';
import {WorkService} from '../../../_services/work.service';
import {Work} from '../../../_models/work/work';
import {ActionsService} from '../../../_services/actions.service';
import {Subscription} from 'rxjs';
import {MenuService} from '../../../_services/menu.service';
import {ResponsiveData} from '../../../_models/ResponsiveData';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    @ViewChild('customBody') customBody: ElementRef;
    @ViewChild('image') image: ElementRef;
    @ViewChild('detailWrapper') detailWrapper: ElementRef;
    @ViewChild('downBtn') downBtn: ElementRef;
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    resizeWidth;
    resizeHeight;
    accordionItemsStyles = {
        left: 0,
        width: 0
    };
    backToWorkText = 'Our works';
    mouseWillCount = 0;
    slides: Work[];
    count;
    slideWidth;
    clickedWidth = 0;
    imageUrl;
    done = false;
    doneService = false;
    clickedSlide = null;
    workScrollTop;
    detailWrapperLeft = 15;
    detailWrapperHeight;
    bannerHeight;
    lastIndex;
    zoomed = 100;

    currentTitle;
    currentSubTitle;
    currentDesc;

    isWorkPage = false;
    mobileXsHeight;

    homePage = true;
    delay = 0;

    location: boolean;

    initCurrentTimeOut;
    backToSliderTimeOut;
    isWork: Subscription;

    loadText: string;
    settingSubscription: Subscription;

    windowSize: ResponsiveData;
    windowSubscription: Subscription;

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.initSlider();
        this.mobileXsHeight = window.innerWidth * 250 / 375;
        this.windowWidth = window.innerWidth;
        this.initSizes();
    }

    @HostListener('wheel', ['$event']) wheel(e) {
        if (this.windowWidth > 767) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction(e);
            } else {
                this.onMouseWheel(e);
            }
        } else {
            this.mobileScrollAnimation(e);
        }
    }

    @HostListener('touchmove', ['$event']) touchmove(e) {
        console.log(e);
        if (window.innerWidth > 992) {
            return;
        } else {
            this.mobileScrollAnimation(e);
        }
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 39 || event.keyCode === 40) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction({deltaY: 100});
            } else {
                this.sliderNext();
            }
        } else if (event.keyCode === 37 || event.keyCode === 38) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction({deltaY: -100});
            } else {
                this.sliderPrev();
            }
        }
    }

    constructor(
        private actionsService: ActionsService,
        private activatedRoute: ActivatedRoute,
        private workService: WorkService,
        private menuService: MenuService,
        config: AppGlobals,
        private router: Router
    ) {
        this.imageUrl = config.imageUrl + '/work/';
        if (!this.workService.works) {
            this.initLoadText();
        }
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        this.location = !location.href.split('/')[4];
        // console.log('onInit');
        this.workScrollTop = -window.innerHeight + 100;
        this.actionsService.workScrollPosition.next(this.workScrollTop);
        this.getParams();
        this.mobileXsHeight = window.innerWidth * 250 / 375;
        this.isWork = this.actionsService.isWorkPage().subscribe(
            bool => {
                setTimeout(() => {
                    this.initPageByUrl(bool);
                }, 100);
            }
        );
        this.initSizes();
    }

    initPageByUrl(bool) {
        // console.log('onInitBiUrl');
        if (this.homePage) {
            if (!bool) {
                this.backToSlider();
            } else {
                this.getParams();
            }
        }
    }

    initCurrent(index) {
        // console.log('onInitCurrent');
        clearTimeout(this.backToSliderTimeOut);
        this.detailWrapperHeight = (window.innerHeight - 112);
        this.bannerHeight = (window.innerHeight - 100);
        this.lastIndex = index;
        this.clickedSlide = index;
        if (document.getElementById('wwww')) {
            document.getElementById('wwww').style.display = 'block';
        }
        this.detailWrapperLeft = (index + this.accordionItemsStyles.left / this.slideWidth) * this.slideWidth;
        this.clickedWidth = this.slideWidth;
        setTimeout(() => {
            this.zoomed = 180;
            this.detailWrapperLeft = 0;
            this.detailWrapperHeight = window.innerHeight + 112;
            this.bannerHeight = window.innerHeight + 112;
            this.clickedWidth = this.slideWidth * 3;
        }, 100);
        this.initCurrentTimeOut = setTimeout(() => {
            this.backToWorkText = 'Back to Works';
            this.showDownBtn();
            if (this.detailWrapper) {
                this.detailWrapper.nativeElement.style.opacity = '.74';
            }
            this.navigate(index);
        }, 1400);
    }

    backToSlider() {
        // console.log('backTo');
        clearTimeout(this.initCurrentTimeOut);
        if (this.detailWrapper) {
            this.detailWrapper.nativeElement.style.opacity = '0';
        }
        this.hideDownBtn();
        this.zoomed = 100;
        this.bannerHeight = window.innerHeight - 112;
        this.detailWrapperHeight = window.innerHeight - 112;
        this.detailWrapperLeft = (this.lastIndex + this.accordionItemsStyles.left / this.slideWidth) * this.slideWidth;
        this.clickedWidth = this.slideWidth;
        if (this.customBody) {
            this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 100}px, 0)`;
        }
        this.backToSliderTimeOut = setTimeout(() => {
            this.backToWorkText = 'Our works';
            this.clickedSlide = null;
            if (this.homePage) {
                this.router.navigate(['/']).then();
            }
            if (document.getElementById('wwww')) {
                document.getElementById('wwww').style.display = 'none';
            }
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
        this.slideWidth = window.innerWidth > 992 ? (window.innerWidth - 112) / 4 : (window.innerWidth) / 3;
        this.accordionItemsStyles.width = this.slideWidth * this.count;
    }

    navigate(index) {
        this.workService.current = this.slides[index];
        this.currentTitle = this.slides[index].title;
        this.currentDesc = this.slides[index].description;
        this.currentSubTitle = this.slides[index].subTitle;
        this.router.navigate([`project/${this.slides[index].slug}`]).then();
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
        this.workScrollTop = -window.innerHeight + 100;
        if (this.clickedSlide < this.slides.length - 1) {
            this.image.nativeElement.classList.add('fadeOutLeft');
            this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 100}px, 0)`;
            this.showDownBtn();
            setTimeout(() => {
                this.image.nativeElement.classList.remove('fadeOutLeft', 'fadeInRight', 'fadeInLeft');
                this.image.nativeElement.classList.add('fadeInRight');
                this.clickedSlide++;
                this.lastIndex++;
                this.workService.current = this.slides[this.clickedSlide];
                this.currentTitle = this.slides[this.clickedSlide].title;
                this.currentDesc = this.slides[this.clickedSlide].description;
                this.currentSubTitle = this.slides[this.clickedSlide].subTitle;
                this.router.navigate([`project/${this.slides[this.clickedSlide].slug}`]).then();
            }, 500);
        }
    }

    pagePrev() {
        this.workScrollTop = -window.innerHeight + 100;
        if (this.clickedSlide > 0) {
            this.image.nativeElement.classList.add('fadeOutRight');
            this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 100}px, 0)`;
            this.showDownBtn();
            setTimeout(() => {
                this.image.nativeElement.classList.remove('fadeOutRight', 'fadeInRight', 'fadeInLeft');
                this.image.nativeElement.classList.add('fadeInLeft');
                this.clickedSlide--;
                this.lastIndex--;
                this.workService.current = this.slides[this.clickedSlide];
                this.currentTitle = this.slides[this.clickedSlide].title;
                this.currentDesc = this.slides[this.clickedSlide].description;
                this.currentSubTitle = this.slides[this.clickedSlide].subTitle;
                this.router.navigate([`project/${this.slides[this.clickedSlide].slug}`]).then();
            }, 500);
        }
    }

    goDown() {
        const workHeight = this.customBody.nativeElement.scrollHeight;

        this.workScrollTop = -(document.getElementById('wwww').clientHeight + window.innerHeight - 100);
        this.actionsService.workScrollPosition.next(this.workScrollTop);
        this.hideDownBtn();
        if (this.workScrollTop < -workHeight) {
            this.workScrollTop = -workHeight;
        }
    }

    desktopScrollFunction(event) {
        if (this.customBody) {
            const workHeight = this.customBody.nativeElement.scrollHeight;
            if (event.deltaY > 10) {
                this.workScrollTop = this.workScrollTop > -workHeight ?
                    this.workScrollTop - event.deltaY * .7 : -workHeight;
                if (this.workScrollTop < -workHeight) {
                    this.workScrollTop = -workHeight;
                }
            } else if (event.deltaY < -10) {
                this.workScrollTop = this.workScrollTop < -window.innerHeight + 100 ?
                    this.workScrollTop - event.deltaY * .7 : -window.innerHeight + 100;
                if (this.workScrollTop > -window.innerHeight + 100) {
                    this.workScrollTop = -window.innerHeight + 100;
                }
            }
            this.actionsService.workScrollPosition.next(this.workScrollTop);
            this.customBody.nativeElement.style.transform = `translate3d(0, ${this.workScrollTop}px, 0)`;
            if (this.workScrollTop < -(document.getElementById('wwww').clientHeight + window.innerHeight - 100)
                || this.workScrollTop === -workHeight) {
                this.hideDownBtn();
            } else {
                this.showDownBtn();
            }

        }
    }

    mobileScrollAnimation(event) {
        const wrapper = document.getElementById('mobileRouter');
        const cont = document.getElementById('mobileCont');
        this.actionsService.workScrollPosition.next(wrapper.scrollTop);
        // console.log(event.deltaY);
        // console.log(cont.offsetHeight, wrapper.scrollTop);
    }

    getParams() {
        // console.log('get params');
        if (this.workService.works) {
            this.slides = this.workService.works;
            this.done = true;
            this.doneService = true;
            // console.log('get params if');
            this.initSlider();
            this.getCurrent();
        } else {
            this.workService.getWorks().subscribe(
                d => {
                    this.slides = d;
                    this.done = true;
                    this.createMessage(true);
                    this.initSlider();
                    this.getCurrent();
                },
                e => console.log('errrrr', e)
            );
        }
    }

    getCurrent() {
        // console.log('get current');
        const pathObj = location.pathname.split('/');
        // console.log(pathObj);
        if (pathObj.length > 1 && pathObj[1] === 'project') {
            this.slides.forEach((work, index) => {
                if (work.slug.toString() === pathObj[2]) {
                    setTimeout(() => {
                        this.initCurrent(index);
                    }, 200);
                }
            });
        } else {
            // console.log(location.pathname);
            if (location.pathname === '/') {
                // console.log('if');
                this.backToSlider();
            }
        }
    }

    backToSliderMob() {
        // this.backToWorkText = 'Our works';
        this.clickedSlide = null;
        this.router.navigate(['/']).then();
        // document.getElementById('wwww').style.display = 'none';
    }

    mobileNavigate(index) {
        this.clickedSlide = index;
        this.navigate(index);
    }

    showDownBtn() {
        if (this.downBtn) {
            this.downBtn.nativeElement.classList.remove('fadeOut');
            this.downBtn.nativeElement.classList.add('fadeIn');
        }
    }

    hideDownBtn() {
        if (this.downBtn) {
            this.downBtn.nativeElement.classList.remove('fadeIn');
            this.downBtn.nativeElement.classList.add('fadeOut');
        }
    }

    initSizes() {
        if (this.windowWidth >= 992) {
            this.resizeWidth = (this.windowWidth - 112) * 3 / 4;
            this.resizeHeight = this.windowHeight - 116;
        } else if (this.windowWidth >= 768) {
            this.resizeWidth = this.windowWidth;
            this.resizeHeight = this.windowHeight - 100;
        } else if (this.windowWidth >= 576) {
            this.resizeWidth = this.windowWidth / 2;
            this.resizeHeight = this.resizeWidth * 250 / 400;
        } else {
            this.resizeWidth = this.windowWidth;
            this.resizeHeight = this.resizeWidth * 250 / 400;
        }
    }

    // // // // // LOADING MESSAGE // // // // //

    initLoadText(): void {
        this.settingSubscription = this.menuService.getSettingsRX()
            .subscribe(settings => {
                if (settings) {
                    this.loadText = settings.find(st => st.key === 'animation-text').value;
                    const data = this.loadText.split('');
                    data.forEach((wr, index) => {
                        this.delay += 10;
                        const space = document.createElement('span');
                        const spanUp = document.createElement('span');
                        const span = document.createElement('span');
                        space.style.width = '30px';
                        space.className = 'letter';
                        spanUp.className = 'upShow';
                        span.className = 'letter';
                        span.innerText = wr;
                        span.style.position = 'relative';
                        if (wr === ' ') {
                            document.getElementsByClassName('message')[0].appendChild(space);
                        } else {
                            document.getElementsByClassName('message')[0].appendChild(span);
                        }
                        span.style.fontSize = (this.windowSize.width * 65 * this.windowSize.rate) / 1920 + 'px';
                        span.style.lineHeight = (this.windowSize.width * 80 * this.windowSize.rate) / 1920 + 'px';
                        span.style.animationDelay += this.delay + 'ms';
                        spanUp.style.animationDelay += this.delay + 'ms';
                        span.appendChild(spanUp);
                    });
                }
            });
    }

    createMessage(order: boolean): void {
        let timeOne;
        let timeSecond;

        if (window.innerWidth > 992) {
            timeOne = 1700;
            timeSecond = 3470;
        } else if (window.innerWidth > 767 && window.innerWidth < 992) {
            timeOne = 1650;
            timeSecond = 3900;
        } else {
            timeOne = 1650;
            timeSecond = 3800;
        }

        document.getElementById('loading-section-1').className += ' loadBackActive';
        document.getElementById('loading-section-2').className += ' loadBackActive';
        document.getElementById('loading-section-3').className += ' loadBackActive';

        if (order) {
            setTimeout(() => {
                document.getElementsByClassName('message')[0].remove();
            }, timeOne);
            setTimeout(() => {
                document.getElementsByClassName('please-wait')[0].remove();
            }, timeSecond);
        }
    }

    ngOnDestroy(): void {
        this.homePage = false;
        this.isWork.unsubscribe();
        if (this.settingSubscription) {
            this.settingSubscription.unsubscribe();
        }
        this.windowSubscription.unsubscribe();
        // console.log('destroy: ', this.homePage);
    }
}
