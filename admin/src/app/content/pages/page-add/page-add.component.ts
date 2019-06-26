import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PagesService} from '../../../shared/services/pages.service';
import {NzMessageService} from 'ng-zorro-antd';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AppGlobals} from '../../../app.globals';


class UploadAdapter {
    loader;  // your adapter communicates to CKEditor through this
    url;
    service;
    imageName;
    dir;
    random;

    // http: HttpClient;

    constructor(loader, service, dir, random, url) {
        this.random = random;
        this.dir = dir;
        this.service = service;
        this.loader = loader;
        this.url = url + '/uploads/pages/ckeditor/' + this.dir + '/';
    }

    upload() {
        return new Promise((resolve, reject) => {

            this.loader.file.then(f => {
                const form = new FormData();
                form.append('random', this.random);
                form.append('dirName', this.dir);
                form.append('image', f);
                this.imageName = f.name;
                this.service.ckEditorSaveImage(form).subscribe(d => {
                        resolve({default: this.url + this.random + f.name});
                    },
                    e => console.log(e)
                );
            });
            // resolve({ default: this.url });
        });
    }

    // Aborts the upload process.
    abort() {
        // this.service.ckEditorDeleteImage(this.imageName).subscribe(d => {
        //         console.log(d);
        //     },
        //     e => console.log(e)
        // );
    }

}


@Component({
    selector: 'app-page-add',
    templateUrl: './page-add.component.html',
    styleUrls: ['./page-add.component.css']
})
export class PageAddComponent implements OnInit, OnDestroy {
    public ckconfig: any;
    validateForm: FormGroup;
    public Editor = ClassicEditor;
    uploading = false;
    randomString;
    dirName;
    saved = false;
    editorData;
    url;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PagesService,
        private globals: AppGlobals
    ) {
        this.url = this.globals.url;
        this.initEditor();

    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            key: ['', Validators.required],
            content: ['', Validators.required]
        });
        this.randomString = this.generateRandomString(10);
        this.dirName = this.randomString;
    }

    theUploadAdapterPlugin = (editor) => {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader, this.service, this.dirName, this.randomString += 's', this.url);
        };
    }

    public initEditor() {
        this.ckconfig = {
            extraPlugins: [this.theUploadAdapterPlugin]
        };
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
