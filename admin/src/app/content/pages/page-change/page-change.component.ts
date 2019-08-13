import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PagesService} from '../../../shared/services/pages.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
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
            console.log('UploadAdapter upload called', this.loader, this.url);

            this.loader.file.then(f => {
                const form = new FormData();
                form.append('random', this.random);
                form.append('dirName', this.dir);
                form.append('image', f);
                this.imageName = f.name;
                this.service.ckEditorSaveImage(form).subscribe(d => {
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
        console.log(222222);
        // this.service.ckEditorDeleteImage(this.imageName).subscribe(d => {
        //         console.log(d);
        //     },
        //     e => console.log(e)
        // );
    }

}


@Component({
    selector: 'app-page-change',
    templateUrl: './page-change.component.html',
    styleUrls: ['./page-change.component.css']
})
export class PageChangeComponent implements OnInit {
    public Editor = ClassicEditor;
    public ckconfig: any;
    randomString;
    dirName;
    validateForm: FormGroup;
    uploading = false;
    page;
    url;

    constructor(
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PagesService,
        private router: Router,
        private globals: AppGlobals
    ) {
        if (!this.service.candidatePage) {
            this.router.navigate(['post']);
        }
        this.url = this.globals.url;
        this.initEditor();
    }

    ngOnInit() {

        // this.url = this.service.url + '/uploads/posts/';
        this.page = this.service.candidatePage;
        console.log(this.page);
        this.validateForm = this.fb.group({
            key: [{value: this.page.key, disabled: true}, Validators.required],
            content: [this.page.content, Validators.required],
        });

        this.randomString = this.page.random;
        this.dirName = this.page.random;
    }

    theUploadAdapterPlugin = (editor) => {
        console.log(editor.ui.componentFactory.names());
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader, this.service, this.dirName, this.randomString += 's', this.url);
        };
    }

    public initEditor() {
        this.ckconfig = {
            extraPlugins: [this.theUploadAdapterPlugin],
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'alignment',                                                 // <--- ADDED
                    'bold',
                    'italic',
                    'link',
                    'bulletedList',
                    'numberedList',
                    'imageUpload',
                    'blockQuote',
                    'undo',
                    'redo'
                ]
            },
            image: {
                toolbar: [
                    'imageStyle:full',
                    'imageStyle:side',
                    '|',
                    'imageTextAlternative'
                ]
            },
        };
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
