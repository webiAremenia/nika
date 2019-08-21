import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {LogoService} from '../../../shared/services/logo.service';

@Component({
    selector: 'app-change-logo',
    templateUrl: './change-logo.component.html',
    styleUrls: ['./change-logo.component.css']
})
export class ChangeLogoComponent implements OnInit {
    validateForm: FormGroup;
    uploading = false;
    selectedValue = '';
    isVisible = false;
    isOkLoading = false;
    images = [];
    url;
    image;
    imageURL;

    constructor(private service: LogoService, private msg: NzMessageService, private router: Router) {
        if (!this.service.candidateLogo) {
            this.router.navigate(['logo']);
        }
    }

    ngOnInit() {
        this.url = this.service.url + '/uploads/medias/';
        this.image = this.service.candidateLogo;
        this.service.getImages().subscribe((data: []) => {
            this.images = data;
        });
        this.validateForm = new FormGroup({
            title: new FormControl({value: this.image.title, disabled: true}, [Validators.required]),
            img: new FormControl(this.image.img, [Validators.required])
        });
    }

    handleUpload(): void {
        this.uploading = true;
        this.service.putLogo(this.image._id, this.validateForm.value)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.msg.success('upload successfully.');
                    this.router.navigate(['logo']);
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
        this.validateForm.get('img').setValue(image._id);
        if (this.image.img) {
            this.imageURL = image.image;
        } else {
            this.imageURL = image.image;
        }
        this.isVisible = false;
    }
}
