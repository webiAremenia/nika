import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PostsService} from '../../../shared/services/posts.service';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {MenuService} from '../../../shared/services/menu.service';
import {PagesService} from '../../../shared/services/pages.service';

@Component({
    selector: 'app-menu-add',
    templateUrl: './menu-add.component.html',
    styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {

    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    selectedValueType = '';
    selectedValueTypeId = '';
    allItems = [];
    candidate;
    pages: any = [];

    constructor(
        private postService: PostsService,
        private portfolioService: PortfolioService,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: MenuService,
        private pageService: PagesService,
        private router: Router) {
        this.pageService.getPages().subscribe(data => {
            this.pages = data;
            console.log(this.pages);
        }, e => console.log(e));
    }

    ngOnInit(): void {
        this.validateForm = new FormGroup({
            key: new FormControl('', [Validators.required]),
            // value: new FormControl(this.candidate.value, [Validators.required]),
            title: new FormControl('', [Validators.required]),
            description: new FormControl(''),
            order: new FormControl('', [Validators.required]),
            isActive: new FormControl('', [Validators.required]),
        });
    }


    handleUpload(): void {
        // this.validateForm.get('typeId').setValue(this.selectedValueTypeId);
        this.uploading = true;
        this.service.addMenu(this.validateForm.value)
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
            case 'url':
                this.validateForm.get('typeId').setValue('ss');
                break;
            case 'portfolio':
                this.portfolioService.getPortfolio().subscribe((data: []) => this.allItems = data);
                break;
        }
    }
}
