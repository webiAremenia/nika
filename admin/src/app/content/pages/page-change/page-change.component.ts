import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NzMessageService} from "ng-zorro-antd";
import {Router} from "@angular/router";
import {PagesService} from "../../../shared/services/pages.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-page-change',
    templateUrl: './page-change.component.html',
    styleUrls: ['./page-change.component.css']
})
export class PageChangeComponent implements OnInit {
    public Editor = ClassicEditor;
    validateForm: FormGroup;
    uploading = false;
    page;
    url;

    constructor(private fb: FormBuilder, private msg: NzMessageService, private service: PagesService, private router: Router) {
        if (!this.service.candidatePage) {
            this.router.navigate(['post']);
        }
    }

    ngOnInit() {

        this.url = this.service.url + '/uploads/posts/';
        this.page = this.service.candidatePage;
        this.validateForm = this.fb.group({
            key: [this.page.key, Validators.required],
            content: [this.page.content, Validators.required],
        })
    }


    handleUpload(): void {
        this.service.putPage(this.page._id, this.validateForm.value)
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
