import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {PostsService} from '../../../shared/services/posts.service';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {MenuService} from '../../../shared/services/menu.service';
import {Router} from '@angular/router';
import {PagesService} from '../../../shared/services/pages.service';

@Component({
    selector: 'app-menu-change',
    templateUrl: './menu-change.component.html',
    styleUrls: ['./menu-change.component.css']
})
export class MenuChangeComponent implements OnInit {

    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    allItems = [];
    candidate;
    keys = ['about', 'works', 'contact'];
    pages: any = [];
    canEdit = false;

    constructor(
        private postService: PostsService,
        private portfolioService: PortfolioService,
        private fb: FormBuilder, private msg: NzMessageService,
        private service: MenuService,
        private pageService: PagesService,
        private router: Router) {
        if (!this.service.candidateMenu) {
            this.router.navigate(['menu']);
        }
        this.pageService.getPages().subscribe(data => {
            this.pages = data;
            console.log(this.pages);
        }, e => console.log(e));
    }

    ngOnInit(): void {
        this.candidate = this.service.candidateMenu;

        if (this.keys.indexOf(this.candidate.key) === -1) {
            this.canEdit = true;
            this.validateForm = new FormGroup({
                key: new FormControl(this.candidate.key, [Validators.required]),
                // value: new FormControl(this.candidate.value, [Validators.required]),
                title: new FormControl(this.candidate.title, [Validators.required]),
                description: new FormControl(this.candidate.description),
                order: new FormControl(this.candidate.order, [Validators.required]),
                isActive: new FormControl(this.candidate.isActive, [Validators.required]),
            });
        } else {
            this.validateForm = new FormGroup({
                key: new FormControl({value: this.candidate.key, disabled: true}, [Validators.required]),
                // value: new FormControl(this.candidate.value, [Validators.required]),
                title: new FormControl(this.candidate.title, [Validators.required]),
                description: new FormControl(this.candidate.description),
                order: new FormControl(this.candidate.order, [Validators.required]),
                isActive: new FormControl(this.candidate.isActive, [Validators.required]),
            });
        }


    }


    handleUpload(): void {
        this.uploading = true;
        this.service.changeMenu(this.validateForm.value, this.candidate._id)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.msg.success('upload successfully.');
                    this.router.navigate(['menu']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

    foo(item) {
        switch (item) {
            case 'post':
                this.postService.getPosts().subscribe((data: []) => this.allItems = data);
                break;
            case 'portfolio':
                this.portfolioService.getPortfolio().subscribe((data: []) => this.allItems = data);
                break;
        }
    }

}
