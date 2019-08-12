import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SliderService} from '../../../shared/services/slider.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {LogoService} from '../../../shared/services/logo.service';

@Component({
  selector: 'app-add-logo',
  templateUrl: './add-logo.component.html',
  styleUrls: ['./add-logo.component.css']
})
export class AddLogoComponent implements OnInit {
    validateForm: FormGroup;
    uploading = false;
    selectedValue = '';
    isVisible = false;
    isOkLoading = false;
    images = [];
    url;
    imgFlag = false;
    img = '';

    constructor(private service: LogoService, private msg: NzMessageService, private router: Router) {
    }

    ngOnInit() {
        this.url = this.service.url + '/uploads/medias/';
        this.service.getImages().subscribe((data: []) => {
            this.images = data;
        });
        this.validateForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            img: new FormControl('', [Validators.required])
        });
    }

    handleUpload(): void {
        this.uploading = true;
        this.service.postLogo(this.validateForm.value)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.msg.success('upload successfully.');
                    this.router.navigate(['logo'])
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        this.isOkLoading = true;
        setTimeout(() => {
            this.isVisible = false;
            this.isOkLoading = false;
        }, 3000);
    }

    handleCancel(): void {
        this.isVisible = false;
    }

    chooseImage(image) {
        console.log(image);
        this.validateForm.get('img').setValue(image._id);
        this.img = image.image;
        this.imgFlag = true;
        this.isVisible = false;
        console.log(this.validateForm)
    }
}
