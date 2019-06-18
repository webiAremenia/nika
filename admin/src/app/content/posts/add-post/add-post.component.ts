import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PostsService} from '../../../shared/services/posts.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AppGlobals} from "../../../app.globals";


class UploadAdapter {
    loader;  // your adapter communicates to CKEditor through this
    url;
    service;
    imageName;
    random;
    dir;

    constructor(loader, service, dir, random, url) {
        this.random = random;
        this.service = service;
        this.loader = loader;
        this.dir = dir;
        this.url = url + '/uploads/posts/ckeditor/' + this.dir + '/';
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
                this.service.ckEditorSavePostImage(form).subscribe(d => {
                        console.log(d);
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
        console.log('Abort');
        // this.service.ckEditorDeletePostImage(this.dir + '/' + this.imageName).subscribe(d => {
        //         console.log('22222');
        //         console.log(d);
        //     },
        //     e => console.log(e)
        // );
    }

}

@Component({
    selector: 'app-add-post',
    templateUrl: './add-post.component.html',
    styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit, OnDestroy{
    public ckconfig: any;
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    randomString;
    dirName;
    url;
    saved = false;

    constructor(
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PostsService,
        private router: Router,
        private globals: AppGlobals
    ) {
        this.url = this.globals.url;
        this.initEditor();
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
    }

    theUploadAdapterPlugin = (editor) => {
        console.log(11111111111111111111)
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader, this.service, this.dirName, this.randomString += 's', this.url);
        };
    }

    public initEditor() {
        this.ckconfig = {
            extraPlugins: [this.theUploadAdapterPlugin]
        };
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
