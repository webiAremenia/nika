import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Router} from '@angular/router';
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
        this.service.ckEditorDeletePostImage(this.dir + '/' + this.imageName).subscribe(d => {
                console.log('22222');
                console.log(d);
            },
            e => console.log(e)
        );
    }

}


@Component({
    selector: 'app-change-post',
    templateUrl: './change-post.component.html',
    styleUrls: ['./change-post.component.css']
})
export class ChangePostComponent implements OnInit {

    public ckconfig: any;
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    post;
    url;
    previewImage;
    randomString;
    dirName;

    constructor(
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PostsService,
        private router: Router,
        private globals: AppGlobals
    ) {
        if (!this.service.candidatePost) {
            this.router.navigate(['post']);
        }
        this.url = this.globals.url;
        this.initEditor();
    }

    ngOnInit(): void {

        // this.url = this.service.url + '/uploads/posts/';
        this.post = this.service.candidatePost;
        this.validateForm = new FormGroup({
            title: new FormControl(this.post.title, [Validators.required]),
            description: new FormControl(this.post.description, [Validators.required]),
            content: new FormControl(this.post.content, [Validators.required]),
            alt: new FormControl(this.post.alt),
            image: new FormControl(this.post.image)
        });
        this.previewImage = this.url + '/uploads/posts/' + this.post.image;

        this.randomString = this.post.random
        this.dirName = this.post.random
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
        this.previewImage = file.url || file.thumbUrl;
        return false;
    }

    handleUpload(): void {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        if (this.fileList.length > 0) {
        this.fileList.forEach((file: any) => {
          formData.append('image', file);
        });
        } else {
          formData.append('image', this.validateForm.get('image').value);
        }

        formData.append('title', this.validateForm.get('title').value);
        formData.append('description', this.validateForm.get('description').value);
        formData.append('content', this.validateForm.get('content').value);
        formData.append('alt', this.validateForm.get('alt').value);
        this.uploading = true;
        this.service.putPosts(this.post._id, formData)
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

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            this.fileList[0] = event.target.files[0];
            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = (e) => {
                this.previewImage = e.target;
                console.log(event.target);
            };
        }
    }


}
