import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {AppGlobals} from '../../../app.globals';
import {SettingsService} from '../../../shared/services/settings.service';


@Component({
    selector: 'app-add-portfolio',
    templateUrl: './add-portfolio.component.html',
    styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit, OnDestroy {
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    flag = true;
    randomString;
    dirName;
    saved = false;
    url;
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
        this.validateForm = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            link: ['', [Validators.required]],
            content: ['', [Validators.required]],
            image: [null]
        });
        this.randomString = this.generateRandomString(10);
        this.dirName = this.randomString;
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
        this.flag = false;
        this.fileList = this.fileList.concat(file);
        return false;
    }

    handleUpload(): void {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        this.fileList.forEach((file: any) => {
            formData.append('images', file);
        });
        formData.append('title', this.validateForm.get('title').value);
        formData.append('description', this.validateForm.get('description').value);
        formData.append('link', this.validateForm.get('link').value);
        formData.append('content', this.validateForm.get('content').value);
        formData.append('random', this.dirName);
        this.uploading = true;
        this.service.postPortfolio(formData)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.msg.success('upload successfully.');
                    this.saved = true;
                    this.router.navigate(['portfolio']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

    generateRandomString(stringLength) {
        let randomString = '';
        let randomAscii;
        for (let i = 0; i < stringLength; i++) {
            randomAscii = Math.floor((Math.random() * 25) + 97);
            randomString += String.fromCharCode(randomAscii);
        }
        return randomString;
    }

    ngOnDestroy(): void {
        if (!this.saved) {
            this.service.ckDeleteDir(this.dirName).subscribe();
        }
    }
}
