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

    // // // FONT SIZE // // //
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    sectionArr: Array<number> = [];
    scrollPosition = 0;
    scrollHeight = 0;
    bannerHeight = 0;
    mouseCheck = 0;

    @ViewChild('aboutScroll') aboutScroll: ElementRef;

    constructor(
        private teamService: TeamService,
        private actionsService: ActionsService) {
        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);
    }

    @HostListener('wheel', ['$event']) wheel(e) {
        this.initAnimation(e.deltaY);
    }

    @HostListener('window:keydown', ['$event'])
    onKeyDown(event) {
        if (event.keyCode === 32) {
            this.initAnimation(650);
        }
        if (event.keyCode === 40) {
            this.initAnimation(34);
        } else if (event.keyCode === 38) {
            this.initAnimation(-34);
        }
    }

    ngOnInit() {
        // this.getAll();
        this.getPage();
    }

    initAnimation(position) {
        this.scrollPosition += position;
        if (window.innerWidth > 992) {
            this.mouseCheck += 1;
            if (this.mouseCheck === 1) {
                const clientHeight = document.getElementsByClassName('about-page')[0].clientHeight;
                if (this.sectionArr.length === 0 && window.innerWidth > 992) {
                    this.initSectionsArr();
                    this.scrollHeight = document.getElementsByClassName('about-scroll')[0].scrollHeight;
                    this.bannerHeight = document.getElementsByClassName('about-page')[0].clientHeight - clientHeight; // 0
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
            }, 25);

        } else {
            if (this.sectionArr.length === 0 && window.innerWidth <= 992) {
                this.initSectionsArr();
                this.scrollHeight = document.getElementsByClassName('about-scroll')[0].scrollHeight;
                this.bannerHeight = window.innerHeight / 1.5;
            }

            for (let i = 0; i < this.sectionArr.length; i++) {
                if (this.scrollPosition + (document.documentElement.clientHeight) - window.innerHeight / 3 >= this.sectionArr[i]) {
                    document.getElementById('section-' + (i + 1)).style.opacity = '1';
                }
            }
        }

    }

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

    getPage() {
        this.teamService.getTeam().subscribe((data: TeamPage[]) => {
            this.pageContent = data[0];
            // console.log(this.pageContent);
            this.done = true;
        });
    }

    // getAll() {
    //     if (this.service.pages) {
    //         this.pages = this.service.pages;
    //         this.page = this.pages.find(p => {
    //             return p.key === 'page_about';
    //         });
    //         this.done = true;
    //     } else {
    //         this.service.getAll().subscribe(
    //             data => {
    //                 this.pages = data;
    //                 this.page = this.pages.find(p => {
    //                     return p.key === 'page_about';
    //                 });
    //                 this.done = true;
    //             },
    //             err => console.log(err)
    //         );
    //     }
    // }

}
