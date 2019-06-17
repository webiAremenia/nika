import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


class UploadAdapter {
    loader;  // your adapter communicates to CKEditor through this
    url;
    service;
    imageName;

    // http: HttpClient;

    constructor(loader, service) {
        this.service = service;
        this.loader = loader;
        this.url = 'http://localhost:3000/uploads/portfolio/ckeditor/';
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
        this.service.ckEditorDeleteImage(this.imageName).subscribe(d => {
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
export class AddPortfolioComponent implements OnInit {
    public ckconfig: any;
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    flag = true;

    constructor(private fb: FormBuilder, private msg: NzMessageService, private service: PortfolioService, private router: Router) {
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
        this.uploading = true;
        this.service.postPortfolio(formData)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.msg.success('upload successfully.');
                    this.router.navigate(['portfolio']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }


}
