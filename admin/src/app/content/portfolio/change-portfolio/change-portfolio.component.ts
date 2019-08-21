import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {AppGlobals} from '../../../app.globals';
import {SettingsService} from '../../../shared/services/settings.service';


@Component({
    selector: 'app-change-portfolio',
    templateUrl: './change-portfolio.component.html',
    styleUrls: ['./change-portfolio.component.css']
})
export class ChangePortfolioComponent implements OnInit {
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    isVisible = false;
    isOkLoading = false;
    selectedValue = '';
    images = [];
    portfolio;
    url;
    deletedimages = [];
    randomString;
    dirName;
    apiKey;
    editorConfigs;

    constructor(
        private settingService: SettingsService,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PortfolioService,
        private router: Router,
        private globals: AppGlobals
    ) {
        this.url = this.globals.url;
        if (!settingService.settings) {
            this.router.navigate(['post']);
        }
        this.apiKey = settingService.settings.filter(set => set.key === 'editor_api_key')[0].value;
    }

    ngOnInit(): void {
        setTimeout(_ => {
            if (!this.service.candidatePortfolio) {
                this.router.navigate(['/portfolio']);
            }
        }, 500);
        this.portfolio = this.service.candidatePortfolio;
        this.validateForm = new FormGroup({
            title: new FormControl(this.portfolio.title, [Validators.required]),
            description: new FormControl(this.portfolio.description, [Validators.required]),
            content: new FormControl(this.portfolio.content, [Validators.required]),
            link: new FormControl(this.portfolio.link, [Validators.required]),
            imgs: new FormControl(this.portfolio.imgs, [Validators.required]),
            deletedimages: new FormControl(this.deletedimages, [])
        });

        this.randomString = this.portfolio.random;
        this.dirName = this.portfolio.random;
        this.editorConfigs = {
            plugins: ['link', 'table', 'image imagetools'],
            imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
            images_upload_url: this.url + '/uploads/portfolio/ckeditor/' + this.dirName + '/',
            images_upload_handler: this.handlerEditor,
        };
    }

    handlerEditor = (blobInfo, success, failure) => {
        let formData;

        formData = new FormData();
        formData.append('random', this.randomString);
        formData.append('dirName', this.dirName);
        formData.append('image', blobInfo.blob(), blobInfo.filename());

        this.service.ckEditorSavePortfolioImage(formData).subscribe((d: any) => {
                success(this.url + '/uploads/portfolio/ckeditor/' + this.dirName + '/' + d.filename);
            },
            e => console.log(e)
        );
    }

    beforeUpload = (file: UploadFile): boolean => {
        this.fileList = this.fileList.concat(file);
        return false;
    }

    handleUpload(): void {
        // console.log(this.validateForm.value)
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        this.fileList.forEach((file: any) => {
            formData.append('images', file);
        });
        formData.append('title', this.validateForm.get('title').value);
        formData.append('description', this.validateForm.get('description').value);
        formData.append('content', this.validateForm.get('content').value);
        formData.append('link', this.validateForm.get('link').value);
        formData.append('imgs', this.portfolio.imgs);
        formData.append('deletedimages', this.validateForm.get('deletedimages').value);
        this.uploading = true;
        const data = {
            deletedimages: this.deletedimages,
            portfolio: formData
        };
        this.service.putPortfolio(this.portfolio._id, formData)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.msg.success('upload successfully.');
                    console.log(this.portfolio.imgs);
                    this.router.navigate(['portfolio']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

    deleteImage(image) {
        this.deletedimages.push(image);
        this.portfolio.imgs = this.portfolio.imgs.filter(item => item !== image);
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isVisible = false;
        this.isOkLoading = false;
    }

    handleCancel(): void {
        this.isVisible = false;
    }

}
