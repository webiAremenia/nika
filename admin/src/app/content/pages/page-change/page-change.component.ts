import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PagesService} from '../../../shared/services/pages.service';
import {AppGlobals} from '../../../app.globals';
import {SettingsService} from "../../../shared/services/settings.service";


@Component({
    selector: 'app-page-change',
    templateUrl: './page-change.component.html',
    styleUrls: ['./page-change.component.css']
})
export class PageChangeComponent implements OnInit {

    randomString;
    dirName;
    validateForm: FormGroup;
    uploading = false;
    page;
    url;
    editorConfigs;
    apiKey;

    constructor(
        private settingService: SettingsService,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PagesService,
        private router: Router,
        private globals: AppGlobals
    ) {
        if (!this.service.candidatePage) {
            this.router.navigate(['page']);
        }
        this.url = this.globals.url;
        if (!settingService.settings) {
            this.router.navigate(['page']);
        }
        this.apiKey = settingService.settings.filter(set => set.key === 'editor_api_key')[0].value;
    }

    ngOnInit() {
        this.page = this.service.candidatePage;
        this.validateForm = this.fb.group({
            key: [{value: this.page.key, disabled: true}, Validators.required],
            content: [this.page.content, Validators.required],
        });
        this.randomString = this.page.random;
        this.dirName = this.page.random;

        this.editorConfigs = {
            plugins: ['link', 'table', 'image imagetools'],
            imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
            images_upload_url: this.url + '/uploads/pages/ckeditor/' + this.dirName + '/',
            images_upload_handler: this.handlerEditor,
        };
    }

    handlerEditor = (blobInfo, success, failure) => {
        let formData;

        formData = new FormData();
        formData.append('random', this.randomString);
        formData.append('dirName', this.dirName);
        formData.append('image', blobInfo.blob(), blobInfo.filename());
        this.service.ckEditorSaveImage(formData).subscribe((d: any) => {
                success(this.url + '/uploads/pages/ckeditor/' + this.dirName + '/' + d.filename);
            },
            e => console.log(e)
        );
    }

    handleUpload(): void {
        const form = {
            key: this.page.key,
            content: this.validateForm.get('content').value
        };
        this.service.putPage(this.page._id, form)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.msg.success('upload successfully.');
                    this.router.navigate(['page']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

}
