import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
    @ViewChild('page') layot;
    @ViewChild('trigger') customTrigger: TemplateRef<void>;
    triggerTemplate: TemplateRef<void> | null = null;
    user;
    isCollapsed = false;
    posts;

    constructor(private data: DataService, private router: Router) {
        if (!localStorage.getItem('user')) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        // this.layot.elementRef.nativeElement.offsetHeight = window.innerHeight;
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    /**
     * custom trigger can be TemplateRef
     */

    changeTrigger(): void {
        this.triggerTemplate = this.customTrigger;
    }

    logOut() {
        localStorage.clear();
        window.location.href = window.location.origin;
    }
}
