import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PagesService} from '../../../shared/services/pages.service';
import {NzMessageService} from 'ng-zorro-antd';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


// class UploadAdapter {
//     loader;  // your adapter communicates to CKEditor through this
//     url;
//     service;
//     imageName;
//
//     // http: HttpClient;
//
//     constructor(loader, service) {
//         this.service = service;
//         this.loader = loader;
//         this.url = 'http://localhost:3000/uploads/pages/ckeditor/';
//     }
//
//     upload() {
//         return new Promise((resolve, reject) => {
//             console.log('UploadAdapter upload called', this.loader, this.url);
//
//             this.loader.file.then(f => {
//                 const form = new FormData();
//                 form.append('image', f);
//                 this.imageName = f.name;
//                 this.service.ckEditorSaveImage(form).subscribe(d => {
//                         console.log(d);
//                         resolve({default: this.url + f.name});
//                     },
//                     e => console.log(e)
//                 );
//             });
//             // resolve({ default: this.url });
//         });
//     }
//
//     // Aborts the upload process.
//     abort() {
//         console.log(222222)
//         this.service.ckEditorDeleteImage(this.imageName).subscribe(d => {
//                 console.log(d);
//             },
//             e => console.log(e)
//         );
//     }
//
// }


@Component({
    selector: 'app-page-add',
    templateUrl: './page-add.component.html',
    styleUrls: ['./page-add.component.css']
})
export class PageAddComponent implements OnInit {
    public ckconfig: any;
    validateForm: FormGroup;
    public Editor = ClassicEditor;
    uploading = false;

    constructor(private router: Router, private fb: FormBuilder, private msg: NzMessageService, private service: PagesService) {
        // this.initEditor();

    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            key: ['', Validators.required],
            content: ['', Validators.required]
        });
    }

    // theUploadAdapterPlugin = (editor) => {
    //     editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    //         return new UploadAdapter(loader, this.service);
    //     };
    // }

    // public initEditor() {
    //     this.ckconfig = {
    //         extraPlugins: [this.theUploadAdapterPlugin]
    //     };
    // }

    handleUpload(): void {
        this.service.postPage(this.validateForm.value)
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
