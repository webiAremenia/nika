import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PostsService} from '../../../shared/services/posts.service';
import {AppGlobals} from '../../../app.globals';
import {SettingsService} from '../../../shared/services/settings.service';

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit, OnDestroy {
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    randomString;
    dirName;
    url;
    apiKey;
    editorConfigs;
    saved = false;

    constructor(
        private settingService: SettingsService,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PostsService,
        private router: Router,
        private globals: AppGlobals
    ) {
        this.url = this.globals.url;
        if (!settingService.settings) {
            this.router.navigate(['post']);
        }
        this.apiKey = settingService.settings.filter(set => set.key === 'editor_api_key')[0].value;
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            content: ['', [Validators.required]],
            alt: ['', [Validators.required]],
            image: [null]
        });

        this.randomString = this.generateRandomString(10);
        this.dirName = this.randomString;
        this.editorConfigs = {
            plugins: ['link', 'table', 'image imagetools'],
            imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
            images_upload_url: this.url + '/uploads/posts/ckeditor/' + this.dirName + '/',
            images_upload_handler: this.handlerEditor,
        };
    }

    handlerEditor = (blobInfo, success, failure) => {
        let formData;

        formData = new FormData();
        formData.append('random', this.randomString);
        formData.append('dirName', this.dirName);
        // formData.append('image', f);
        formData.append('image', blobInfo.blob(), blobInfo.filename());

        this.service.ckEditorSavePostImage(formData).subscribe((d: any) => {
                success(this.url + '/uploads/posts/ckeditor/' + this.dirName + '/' + d.filename);
            },
            e => console.log(e)
        );
    }


    beforeUpload = (file: UploadFile): boolean => {
        this.fileList = [];
        this.fileList = this.fileList.concat(file);
        return false;
    }

    handleUpload(): void {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        this.fileList.forEach((file: any) => {
            formData.append('image', file);
        });
        formData.append('title', this.validateForm.get('title').value);
        formData.append('description', this.validateForm.get('description').value);
        formData.append('content', this.validateForm.get('content').value);
        formData.append('alt', this.validateForm.get('alt').value);
        formData.append('random', this.dirName);
        this.uploading = true;
        this.service.postPost(formData)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.saved = true;
                    this.msg.success('upload successfully.');
                    this.router.navigate(['post']);
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
