import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AppGlobals} from "../../../app.globals";


class PortfolioUploadAdapter {
    loader;  // your adapter communicates to CKEditor through this
    url;
    service;
    imageName;
    dir;
    random;

    constructor(loader, service, dir, random, url) {
        this.random = random;
        this.dir = dir;
        this.service = service;
        this.loader = loader;
        this.url = url + '/uploads/portfolio/ckeditor/' + this.dir + '/';
    }

    upload() {
        return new Promise((resolve, reject) => {
            // console.log('UploadAdapter upload called', this.loader, this.url);

            this.loader.file.then(f => {
                const form = new FormData();
                form.append('random', this.random);
                form.append('dirName', this.dir);
                form.append('image', f);
                this.imageName = this.random + f.name;
                this.service.ckEditorSavePortfolioImage(form).subscribe(d => {
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
        this.service.ckEditorDeletePortfolioImage(this.dir + '/' + this.imageName).subscribe(d => {
                console.log(d);
            },
            e => console.log(e)
        );
    }

}


@Component({
    selector: 'app-add-portfolio',
    templateUrl: './add-portfolio.component.html',
    styleUrls: ['./add-portfolio.component.css']
})
export class AddPortfolioComponent implements OnInit, OnDestroy {
    public ckconfig: any;
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    flag = true;
    randomString;
    dirName;
    saved = false;
    editorData;
    url;
    constructor(
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PortfolioService,
        private router: Router,
        private globals : AppGlobals
    ) {
        this.url = this.globals.url;
        this.initEditor();
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
    }

    theUploadAdapterPlugin = (editor) => {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new PortfolioUploadAdapter(loader, this.service, this.dirName, this.randomString += 's', this.url);
        };
    }

    public initEditor() {
        this.ckconfig = {
            extraPlugins: [this.theUploadAdapterPlugin]
        };
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
