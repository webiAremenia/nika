import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SliderService} from '../../../shared/services/slider.service';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {MediaService} from '../../../shared/services/media.service';
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
        console.log('Abort');
        this.service.ckEditorDeletePortfolioImage(this.dir + '/' + this.imageName).subscribe(d => {
            },
            e => console.log(e)
        );
    }

}


@Component({
    selector: 'app-change-portfolio',
    templateUrl: './change-portfolio.component.html',
    styleUrls: ['./change-portfolio.component.css']
})
export class ChangePortfolioComponent implements OnInit {
    public ckconfig: any;
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    isVisible = false;
    isOkLoading = false;
    selectedValue = '';
    images = [];
    portfolio;
    url;
    deletedimages = [];
    randomString;
    dirName;

    constructor(
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PortfolioService,
        private router: Router,
        private globals: AppGlobals
    ) {
        this.url = this.globals.url;
        this.initEditor();
    }

    ngOnInit(): void {
        setTimeout(_ => {
            if (!this.service.candidatePortfolio) {
                this.router.navigate(['/portfolio']);
            }
        }, 500);
        // this.url = this.service.url + '/uploads/portfolio/';
        this.portfolio = this.service.candidatePortfolio;
        this.validateForm = new FormGroup({
            title: new FormControl(this.portfolio.title, [Validators.required]),
            description: new FormControl(this.portfolio.description, [Validators.required]),
            content: new FormControl(this.portfolio.content, [Validators.required]),
            link: new FormControl(this.portfolio.link, [Validators.required]),
            imgs: new FormControl(this.portfolio.imgs, [Validators.required]),
            deletedimages: new FormControl(this.deletedimages, [])
        });

        this.randomString = this.portfolio.random;
        this.dirName = this.portfolio.random;
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
        this.fileList = this.fileList.concat(file);
        return false;
    };

    handleUpload(): void {
        const formData = new FormData();
        // tslint:disable-next-line:no-any
        this.fileList.forEach((file: any) => {
            formData.append('images', file);
        });
        formData.append('title', this.validateForm.get('title').value);
        formData.append('description', this.validateForm.get('description').value);
        formData.append('content', this.validateForm.get('content').value);
        formData.append('link', this.validateForm.get('link').value);
        formData.append('imgs', this.portfolio.imgs);
        formData.append('deletedimages', this.validateForm.get('deletedimages').value);
        this.uploading = true;
        const data = {
            deletedimages: this.deletedimages,
            portfolio: formData
        };
        this.service.putPortfolio(this.portfolio._id, formData)
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

    deleteImage(image) {
        this.deletedimages.push(image);
        this.portfolio.imgs = this.portfolio.imgs.filter(item => item !== image);
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isVisible = false;
        this.isOkLoading = false;
    }

    handleCancel(): void {
        this.isVisible = false;
    }

}
