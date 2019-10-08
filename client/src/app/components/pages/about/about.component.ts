import {
    Component, ElementRef, HostListener,
    OnDestroy,
    OnInit, ViewChild
} from '@angular/core';
import {Subscription} from 'rxjs';
import {ResponsiveData} from '../../../_models/ResponsiveData';
import {ActionsService} from '../../../_services/actions.service';
import {TeamService} from '../../../_services/team.service';
import {TeamPage} from '../../../_models/team/TeamPage';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
    done = false;
    pageContent: TeamPage;
    edge = false;
    test = true;

    // // // FONT SIZE // // //
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    // // // SCROLL // // //
    sectionArr: Array<number> = [];
    scrollPosition = 0;
    scrollHeight = 0;
    bannerHeight = 0;

    @ViewChild('aboutScroll') aboutScroll: ElementRef;

    @HostListener('wheel', ['$event']) wheel(e) {
        if (window.innerWidth > 992 && this.edge) {
            if (this.test) {
                const delta = (e.deltaY > 10 || e.deltaY < -10) ? e.deltaY * .7 : null;
                if (delta) {
                    this.initDesktopAnimation(e.deltaY * 5);
                }
                this.test = false;
                setTimeout(() => {
                    this.test = true;
                }, 1000);
            }
        }
        if (window.innerWidth > 992 && !this.edge) {
            const delta = (e.deltaY > 10 || e.deltaY < -10) ? e.deltaY * .7 : null;
            if (delta) {
                this.initDesktopAnimation(e.deltaY);
            }
        }
    }

    @HostListener('DOMMouseScroll', ['$event']) mozScroll(e) {
        if (e.detail > 0) {
            this.initDesktopAnimation(100);
        } else {
            this.initDesktopAnimation(-100);
        }
    }

    @HostListener('touchmove', ['$event']) touchmove(e) {
        console.log(e);
        if (window.innerWidth > 992) {
            this.initDesktopAnimation(e.touches[0].clientY - e.touches[0].screenY);
        } else {
            this.initMobileAnimation();
        }
    }

    @HostListener('window:scroll') scroll(e) {
        this.initMobileAnimation();
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 32) {
            this.initDesktopAnimation(650);
        }
        if (event.keyCode === 40) {
            this.initDesktopAnimation(70);
        } else if (event.keyCode === 38) {
            this.initDesktopAnimation(-70);
        }
    }

    constructor(
        private teamService: TeamService,
        private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        const doc: any = document;
        if (doc.documentMode || /Edge/.test(navigator.userAgent)) {
            this.edge = true;
        }
        this.getPage();
    }

    getPage() {
        this.teamService.getTeam()
            .subscribe((data: TeamPage) => {
                this.pageContent = data;
                this.done = true;
            });
    }

    // // // // // INIT ANIMATIONS // // // // //

    initDesktopAnimation(position: number) {
        this.scrollPosition += position;
        const clientHeight = document.getElementsByClassName('about-page')[0].clientHeight;
        if (this.sectionArr.length === 0 && window.innerWidth > 992) {
            this.initSectionsArr();
            this.scrollHeight = document.getElementsByClassName('about-scroll')[0].scrollHeight;
            this.bannerHeight = document.getElementsByClassName('about-page')[0].clientHeight;
        }
        if (this.scrollPosition < 0) {
            this.scrollPosition = 0;
        } else if (this.scrollPosition > this.scrollHeight) {
            this.scrollPosition = this.scrollHeight;
        }
        this.showSections(position);
        if (this.scrollPosition + clientHeight >= this.scrollHeight) {
            for (let i = 0; i < this.sectionArr.length; i++) {
                document.getElementById('section-' + (i + 1)).style.opacity = '1';
                document.getElementById('section-' + (i + 1)).style.visibility = 'visible';
            }
            return this.aboutScroll.nativeElement.style.transform = `translate3d(0, -${this.scrollHeight - clientHeight}px, 0)`;
        } else if (this.scrollPosition + clientHeight < this.scrollHeight) {
            this.aboutScroll.nativeElement.style.transform = `translate3d(0, -${this.scrollPosition}px, 0)`;
        }
    }


    initMobileAnimation() {
        this.scrollPosition = window.pageYOffset;
        if (this.sectionArr.length === 0 && window.innerWidth <= 992) {
            this.initSectionsArr();
            this.scrollHeight = document.getElementsByClassName('about-scroll')[0].scrollHeight;
            this.bannerHeight = window.innerHeight / 1.5;
        }
        this.showSections();
        if (this.scrollPosition + document.documentElement.clientHeight >= this.sectionArr[this.sectionArr.length - 1]) {
            for (let i = 0; i < this.sectionArr.length; i++) {
                document.getElementById('section-' + (i + 1)).style.opacity = '1';
                document.getElementById('section-' + (i + 1)).style.visibility = 'visible';
            }
        }
    }

    // // // // // SHOW/HIDE SECTION // // // // //

    showSections(position?) {
        for (let i = 0; i < this.sectionArr.length; i++) {
            if (position > 0 &&  this.scrollPosition + this.bannerHeight > this.sectionArr[i]) {
                document.getElementById('section-' + (i + 1)).style.opacity = '1';
                document.getElementById('section-' + (i + 1)).style.visibility = 'visible';
            }
            if (position > 0 &&  this.scrollPosition + this.bannerHeight / 2 > this.sectionArr[i]) {
                if (i > 1) {
                    document.getElementById('section-' + (i) ).style.opacity = '0';
                    document.getElementById('section-' + (i) ).style.visibility = 'hidden';
                }
            }
            if (position < 0 && i > 1 && this.scrollPosition + this.bannerHeight / 2 < this.sectionArr[i]) {
                if (i + 1 === 3) {
                    document.getElementById('section-' + (i)).style.opacity = '1';
                    document.getElementById('section-' + (i)).style.visibility = 'visible';
                    document.getElementById('section-' + (i + 1)).style.opacity = '0';
                    document.getElementById('section-' + (i + 1)).style.visibility = 'hidden';
                }
                document.getElementById('section-' + (i + 1)).style.opacity = '0';
            }
        }
    }

    // // // CREATE COMPONENTS OFFSET'S // // //

    initSectionsArr() {
        if (document.getElementById('section-1')) {
            const sectionCount = document.querySelectorAll('.section').length;
            for (let i = 0; i < sectionCount; i++) {
                this.sectionArr.push(document.getElementById('section-' + (i + 1)).offsetTop);
            }
        }
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

}
