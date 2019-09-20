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
import {normalizeSlashes} from 'ts-node';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
    done = false;
    pageContent: TeamPage;

    // // // FONT SIZE // // //
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    sectionArr: Array<number> = [];
    scrollPosition = 0;
    scrollHeight = 0;
    bannerHeight = 0;
    mouseCheck = 0;

    @ViewChild('aboutScroll') aboutScroll: ElementRef;

    @HostListener('wheel', ['$event']) wheel(e) {
        if (window.innerWidth > 992) {
            if (e.deltaY > 0) {
                this.initDesktopAnimation(100);
            } else {
                this.initDesktopAnimation(-100);
            }
        }
    }

    @HostListener('touchmove', ['$event']) touchmove(e) {
        console.log(e);
        if (window.innerWidth > 992) {
            return;
        } else {
            this.initMobileAnimation();
        }
    }

    @HostListener('window:scroll') scroll(e) {
        this.initMobileAnimation();
        console.log('asdasdasd');
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 32) {
            this.initDesktopAnimation(650);
        }
        if (event.keyCode === 40) {
            this.initDesktopAnimation(34);
        } else if (event.keyCode === 38) {
            this.initDesktopAnimation(-34);
        }
    }

    constructor(
        private teamService: TeamService,
        private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    ngOnInit() {
        // this.getAll();
        this.getPage();
    }

    getPage() {
        this.teamService.getTeam()
            .subscribe((data: TeamPage[]) => {
                this.pageContent = data[0];
                this.done = true;
            });
    }

    // // // INIT ANIMATIONS // // //

    initDesktopAnimation(position: number) {
        this.scrollPosition += position;
        this.mouseCheck += 1;
        if (this.mouseCheck === 1) {
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
            for (let i = 0; i < this.sectionArr.length; i++) {
                if (this.scrollPosition + this.bannerHeight > this.sectionArr[i]) {
                    document.getElementById('section-' + (i + 1)).style.opacity = '1';
                }
            }
            if (this.scrollPosition + clientHeight >= this.scrollHeight) {
                for (let i = 0; i < this.sectionArr.length; i++) {
                    document.getElementById('section-' + (i + 1)).style.opacity = '1';
                }
                return this.aboutScroll.nativeElement.style.transform = `translate3d(0, -${this.scrollHeight - clientHeight}px, 0)`;
            } else if (this.scrollPosition + clientHeight < this.scrollHeight) {
                this.aboutScroll.nativeElement.style.transform = `translate3d(0, -${this.scrollPosition}px, 0)`;
            }
        }
        setTimeout(() => {
            this.mouseCheck = 0;
        }, 300);

    }

    initMobileAnimation() {
        this.scrollPosition = window.pageYOffset;
        if (this.sectionArr.length === 0 && window.innerWidth <= 992) {
            this.initSectionsArr();
            this.scrollHeight = document.getElementsByClassName('about-scroll')[0].scrollHeight;
            this.bannerHeight = window.innerHeight / 1.5;
        }
        for (let i = 0; i < this.sectionArr.length; i++) {
            if (this.scrollPosition + this.bannerHeight >= this.sectionArr[i]) {
                document.getElementById('section-' + (i + 1)).style.opacity = '1';
            }
        }
        if (this.scrollPosition + document.documentElement.clientHeight >= this.sectionArr[this.sectionArr.length - 1]) {
            for (let i = 0; i < this.sectionArr.length; i++) {
                document.getElementById('section-' + (i + 1)).style.opacity = '1';
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
