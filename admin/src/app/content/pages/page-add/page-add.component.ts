import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PagesService} from '../../../shared/services/pages.service';
import {NzMessageService} from 'ng-zorro-antd';
import {AppGlobals} from '../../../app.globals';
import {SettingsService} from '../../../shared/services/settings.service';


@Component({
    selector: 'app-page-add',
    templateUrl: './page-add.component.html',
    styleUrls: ['./page-add.component.css']
})
export class PageAddComponent implements OnInit, OnDestroy {
    validateForm: FormGroup;
    uploading = false;
    randomString;
    dirName;
    saved = false;
    url;
    editorConfigs;
    apiKey;

    constructor(
        private settingService: SettingsService,
        private router: Router,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PagesService,
        private globals: AppGlobals
    ) {
        if (!settingService.settings) {
            this.router.navigate(['page']);
        }
        this.apiKey = settingService.settings.filter(set => set.key === 'editor_api_key')[0].value;
        this.url = this.globals.url;
        console.log(this.apiKey, settingService.settings);
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            key: ['', Validators.required],
            content: ['', Validators.required]
        });
        this.randomString = this.generateRandomString(10);
        this.dirName = this.randomString;
        this.editorConfigs = {
            plugins: 'print preview fullpage powerpaste casechange importcss tinydrive searchreplace autolink' +
                ' autosave save directionality advcode visualblocks visualchars fullscreen image link media' +
                ' mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime' +
                ' advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern ' +
                'noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker ' +
                'emoticons',
            menubar: 'file edit view insert format tools table tc help',
            toolbar: 'undo redo | bold italic underline strikethrough | ' +
                'fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify |' +
                ' outdent indent |  numlist bullist checklist |' +
                ' forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak |' +
                ' charmap emoticons | fullscreen  preview save print |' +
                ' insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl ',

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
            key: this.validateForm.controls.key.value,
            content: this.validateForm.controls.content.value,
            random: this.dirName
        };

        this.service.postPage(form)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.saved = true;
                    this.msg.success('upload successfully.');
                    this.router.navigate(['page']);
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
