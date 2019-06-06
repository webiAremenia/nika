import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {logger} from 'codelyzer/util/logger';

class UploadAdapter {
    loader;  // your adapter communicates to CKEditor through this
    url;
    service;
    imageName;

    // http: HttpClient;

    constructor(loader, service) {
        this.service = service;
        this.loader = loader;
        this.url = 'http://localhost:3000/uploads/posts/ckeditor/';
    }

    upload() {
        return new Promise((resolve, reject) => {
            console.log('UploadAdapter upload called', this.loader, this.url);

            this.loader.file.then(f => {
                const form = new FormData();
                form.append('image', f);
                this.imageName = f.name;
                this.service.ckEditorSaveImage(form).subscribe(d => {
                        console.log(d);
                        resolve({default: this.url + f.name});
                    },
                    e => console.log(e)
                );
            });
            // resolve({ default: this.url });
        });
    }

    // Aborts the upload process.
    abort() {
        console.log('Abort')
        // this.service.ckEditorDeleteImage(this.imageName).subscribe(d => {
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

export class AddPostComponent implements OnInit {
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    public ckconfig: any;
    fileList: UploadFile[] = [];

    constructor(
        private http: HttpClient,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PostsService,
        private router: Router
    ) {
        this.initEditor();
    }

    ngOnInit(): void {
        this.validateForm = this.fb.group({
            title: ['', [Validators.required]],
            description: ['', [Validators.required]],
            content: ['', [Validators.required]],
            alt: ['', [Validators.required]],
            image: [null]
        });
    }

    theUploadAdapterPlugin = (editor) => {
        editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
            return new UploadAdapter(loader, this.service);
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
        this.uploading = true;
        this.service.postPost(formData)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.msg.success('upload successfully.');
                    this.router.navigate(['post']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

}
