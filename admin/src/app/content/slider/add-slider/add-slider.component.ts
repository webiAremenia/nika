import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SliderService} from '../../../shared/services/slider.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
    selector: 'app-add-slider',
    templateUrl: './add-slider.component.html',
    styleUrls: ['./add-slider.component.css']
})
export class AddSliderComponent implements OnInit {
    validateForm: FormGroup;
    uploading = false;
    isVisible = false;
    isOkLoading = false;
    images = [];
    url;
    imgFlag = false;
    img = '';
    menuKeys = [];

    constructor(private service: SliderService, private msg: NzMessageService, private router: Router) {
        if (this.service.menuKeys.length === 0) {
            this.router.navigate(['slider']);
        }
    }

    ngOnInit() {
        this.menuKeys = this.service.menuKeys;
        this.url = this.service.url + '/uploads/medias/';
        this.service.getImages().subscribe((data: []) => {
            this.images = data;
        });
        this.validateForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            url: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            img: new FormControl('', [Validators.required])
        });
    }

    handleUpload(): void {
        this.uploading = true;
        this.service.postSlider(this.validateForm.value)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.msg.success('upload successfully.');
                    this.router.navigate(['slider']);
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
        this.img = image.image;
        this.imgFlag = true;
        this.isVisible = false;
    }
}
