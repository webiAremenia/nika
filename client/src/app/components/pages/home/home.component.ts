import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { AppGlobals } from '../../../app.globals';
import { WorkService } from '../../../_services/work.service';
import { Work } from '../../../_models/work/work';
import { ActionsService } from '../../../_services/actions.service';
import { Subscription } from 'rxjs';
import { MenuService } from '../../../_services/menu.service';
import { ResponsiveData } from '../../../_models/ResponsiveData';


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

    @HostListener('wheel', ['$event'])
    wheel(e: MouseEvent) {
        if (this.windowWidth > 767) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction(e);
            } else {
                this.onMouseWheel(e);
            }
        } else {
            this.mobileScrollAnimation();
        }
    }

    @HostListener('DOMMouseScroll', ['$event'])
    wheelMoz(e: MouseEvent) {
        const mozDelta = {
            deltaY: e.detail * 30
        };
        if (this.windowWidth > 767) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction(mozDelta);
            } else {
                this.onMouseWheel(mozDelta);
            }
        } else {
            this.mobileScrollAnimation();
        }
    }

    @HostListener('touchmove', ['$event'])
    touchmove() {
        if (window.innerWidth > 992) {
            return;
        } else {
            this.mobileScrollAnimation();
        }
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 39 || event.keyCode === 40) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction({ deltaY: 100 });
            } else {
                this.sliderNext();
            }
        } else if (event.keyCode === 37 || event.keyCode === 38) {
            if (this.clickedSlide || this.clickedSlide === 0) {
                this.desktopScrollFunction({ deltaY: -100 });
            } else {
                this.sliderPrev();
            }
        }
    }

    constructor(
        private actionsService: ActionsService,
        private workService: WorkService,
        private menuService: MenuService,
        private config: AppGlobals,
        private router: Router
    ) {
        this.imageUrl = this.config.imageUrl + '/work/';
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit(): void {
        if (!this.workService.works) {
            this.initLoadText();
        } else {
            document.getElementById('please-wait').remove();
        }
        this.location = !location.href.split('/')[4];
        this.workScrollTop = -window.innerHeight + 112;
        this.actionsService.workScrollPosition.next(this.workScrollTop);
        this.getParams();
        this.mobileXsHeight = window.innerWidth * 250 / 375;
        this.isWork = this.actionsService.isWorkPage()
            .subscribe(bool => {
                setTimeout(() => {
                    this.initPageByUrl(bool);
                }, 100);
            }
            );
        this.initSizes();
    }

    initPageByUrl(bool) {
        if (this.homePage) {
            if (!bool) {
                this.backToSlider();
            } else {
                this.getParams();
            }
        }
    }

    initCurrent(index) {
        clearTimeout(this.backToSliderTimeOut);
        this.detailWrapperHeight = (window.innerHeight - 112);
        this.bannerHeight = (window.innerHeight - 112);
        this.lastIndex = index;
        this.clickedSlide = index;
        if (document.getElementById('wwww')) {
            document.getElementById('wwww').style.display = 'block';
        }
        this.detailWrapperLeft = (index + this.accordionItemsStyles.left / this.slideWidth) * this.slideWidth;
        this.clickedWidth = this.slideWidth;
        setTimeout(() => {
            this.zoomed = 120;
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
            this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 112}px, 0)`;
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
            return;
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
        this.slideWidth = window.innerWidth > 992 ?
            (window.innerWidth - 112 - (this.windowSize.height - 112) / 2) / 3
            : (window.innerWidth) / 3;
        this.accordionItemsStyles.width = this.slideWidth * this.count;
    }

    navigate(index) {
        this.workService.current = this.slides[index];
        this.currentTitle = this.slides[index].title.text;
        this.currentDesc = this.slides[index].description.text;
        this.currentSubTitle = this.slides[index].subTitle.text;
        this.router.navigate([`project/${this.slides[index].slug}`]).then();
    }

    sliderNext() {
        if (this.accordionItemsStyles.left >= -this.accordionItemsStyles.width + this.slideWidth * 4) {
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
            this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 112}px, 0)`;
            this.showDownBtn();
            setTimeout(() => {
                this.image.nativeElement.classList.remove('fadeOutLeft', 'fadeInRight', 'fadeInLeft');
                this.image.nativeElement.classList.add('fadeInRight');
                this.clickedSlide++;
                this.lastIndex++;
                this.workService.current = this.slides[this.clickedSlide];
                this.currentTitle = this.slides[this.clickedSlide].title.text;
                this.currentDesc = this.slides[this.clickedSlide].description.text;
                this.currentSubTitle = this.slides[this.clickedSlide].subTitle.text;
                this.router.navigate([`project/${this.slides[this.clickedSlide].slug}`]).then();
            }, 500);
        }
    }

    pagePrev() {
        this.workScrollTop = -window.innerHeight + 100;
        if (this.clickedSlide > 0) {
            this.image.nativeElement.classList.add('fadeOutRight');
            this.customBody.nativeElement.style.transform = `translate3d(0, ${-window.innerHeight + 112}px, 0)`;
            this.showDownBtn();
            setTimeout(() => {
                this.image.nativeElement.classList.remove('fadeOutRight', 'fadeInRight', 'fadeInLeft');
                this.image.nativeElement.classList.add('fadeInLeft');
                this.clickedSlide--;
                this.lastIndex--;
                this.workService.current = this.slides[this.clickedSlide];
                this.currentTitle = this.slides[this.clickedSlide].title.text;
                this.currentDesc = this.slides[this.clickedSlide].description.text;
                this.currentSubTitle = this.slides[this.clickedSlide].subTitle.text;
                this.router.navigate([`project/${this.slides[this.clickedSlide].slug}`]).then();
            }, 500);
        }
    }

    goDown() {
        const workHeight = this.customBody.nativeElement.scrollHeight;

        this.workScrollTop = -(document.getElementById('wwww').clientHeight + window.innerHeight - 112);
        this.actionsService.workScrollPosition.next(this.workScrollTop);
        this.hideDownBtn();
        if (this.workScrollTop < -workHeight) {
            this.workScrollTop = -workHeight;
        }
    }

    desktopScrollFunction(event) {
        const animHeight = (this.workScrollTop + window.innerHeight - 112) / -window.innerHeight;
        if (this.customBody) {
            const workHeight = this.customBody.nativeElement.scrollHeight;
            if (event.deltaY > 10) {
                this.workScrollTop = this.workScrollTop > -workHeight ?
                    this.workScrollTop - event.deltaY * .7 : -workHeight;
                if (this.workScrollTop < -workHeight) {
                    this.workScrollTop = -workHeight;
                }
            } else if (event.deltaY < -10) {
                this.workScrollTop = this.workScrollTop < -window.innerHeight + 112 ?
                    this.workScrollTop - event.deltaY * .7 : -window.innerHeight + 112;
                if (this.workScrollTop > -window.innerHeight + 112) {
                    this.workScrollTop = -window.innerHeight + 112;
                }
            }
            this.actionsService.workScrollPosition.next(this.workScrollTop);
            if ((animHeight) <= 1) {
                this.detailWrapper.nativeElement.style.top = 70 + (animHeight * 30) + '%';
            }
            this.customBody.nativeElement.style.transform = `translate3d(0, ${this.workScrollTop}px, 0)`;
            if (this.workScrollTop < -(document.getElementById('wwww').clientHeight + window.innerHeight - 100)
                || this.workScrollTop === -workHeight) {
                this.hideDownBtn();
            } else {
                this.showDownBtn();
            }

        }
    }

    mobileScrollAnimation() {
        const wrapper = document.getElementById('mobileRouter');
        // const cont = document.getElementById('mobileCont');
        this.actionsService.workScrollPosition.next(wrapper.scrollTop);
        // console.log(event.deltaY);
        // console.log(cont.offsetHeight, wrapper.scrollTop);
    }

    getParams() {
        if (this.workService.works) {
            this.slides = this.workService.works;
            this.done = true;
            if (this.location) {
                this.doneService = true;
            }
            this.initSlider();
            this.getCurrent();
        } else {
            this.workService.getWorks()
                .subscribe(d => {
                    this.slides = d;
                    setTimeout(() => {
                        this.done = true;
                        this.createMessage(true);
                    }, 500);
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
        } else if (this.windowWidth < 375) {
            this.resizeWidth = this.windowWidth;
            this.resizeHeight = this.resizeWidth * 250 / 300;
        }
    }

    // // // // // LOADING MESSAGE // // // // //

    initLoadText(): void {
        this.settingSubscription = this.menuService.getSettingsRX()
            .subscribe(settings => {
                if (settings && !this.doneService) {
                    this.loadText = settings.find(st => st.key === 'animation-text').value;
                    if (this.loadText.length <= 1) {
                        this.loadText = 'Please stand by';
                    }
                    const data = this.loadText.split('');
                    data.forEach(wr => {
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
                            document.getElementById('message').appendChild(space);
                        } else {
                            document.getElementById('message').appendChild(span);
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
        let timeOne: number;
        let timeSecond: number;

        if (window.innerWidth > 992) {
            // timeOne = 1700;
            timeOne = 1800;
            // timeSecond = 3470;
            timeSecond = 4000;

        } else if (window.innerWidth > 767 && window.innerWidth < 992) {
            timeOne = 1650;
            timeSecond = 3800;
        } else {
            timeOne = 1650;
            timeSecond = 3500;
        }

        document.getElementById('loading-section-1').className += ' loadBackActive';
        document.getElementById('loading-section-2').className += ' loadBackActive';
        document.getElementById('loading-section-3').className += ' loadBackActive';

        setTimeout(() => {
            document.getElementById('message').className += ' loadLetterActive';
        }, 1200);

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
    }
}
