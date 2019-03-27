import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../shared/services/posts.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {NzMessageService, UploadFile} from "ng-zorro-antd";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  public Editor = ClassicEditor;
  validateForm: FormGroup;
  uploading = false;
  fileList: UploadFile[] = [];
  constructor(private fb: FormBuilder, private msg: NzMessageService, private service: PostsService, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      title : [ '', [Validators.required ] ],
      description : [ '', [ Validators.required ] ],
      content : [ '', [ Validators.required ] ],
      alt : [ '', [ Validators.required ] ],
      image: [null]
    });
  }



  beforeUpload = (file: UploadFile): boolean => {
    this.fileList = [];
    this.fileList = this.fileList.concat(file);
    return false;
  };

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
          this.router.navigate(['post'])
        },
        () => {
          this.uploading = false;
          this.msg.error('upload failed.');
        }
      );
  }

}
