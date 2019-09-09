import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
import {WorkService} from '../../../shared/services/work.service';

@Component({
    selector: 'app-edit-work',
    templateUrl: './edit-work.component.html',
    styleUrls: ['./edit-work.component.css']
})
export class EditWorkComponent implements OnInit, OnDestroy {
    form: FormGroup;
    slugs = [];
    uploading = false;
    fileList: UploadFile[] = [];
    public imagePath;
    work;
    detailsView = false;
    delete: any;
    imageHeights = [30, 50, 70];
    alignments = ['center', 'right', 'left'];
    verticalAlignments = ['center', 'top', 'bottom'];
    objectFits = ['cover', 'contain', 'none'];
    inValidSlug = false;
    imgId = null;
    videoPath = null;
    videosArr = [];
    videosArrOnDestroy = [];

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private msg: NzMessageService,
        private modalService: NzModalService,
        private workService: WorkService
    ) {
        if (this.workService.candidateWork) {
            this.work = this.workService.candidateWork;
            // this.work.details.forEach(d => {
            //     if (d.type === 'video') {
            //         this.videosArr.push(d.videoURL);
            //     }
            // });
        }
        this.workService.getWorks().subscribe((data: Array<any>) => {
            data.forEach(w => {
                this.slugs.push(w.slug);
            });
            console.log(this.slugs);

        }, err => {
            console.log(err)
        });
    }

    ngOnInit() {
        this.form = this.fb.group({
            slug: [this.work ? this.work.slug : '', Validators.required],
            title: [this.work ? this.work.title : '', Validators.required],
            description: [this.work ? this.work.description : ''],
            imgURL: [this.work ? this.work.img : '', Validators.required],
            details: this.fb.array(this.work ? this.createDetailsForm() : [])
        });
    }

    filterSlug(e) {
        this.inValidSlug = false;
        this.slugs.forEach(slug => {
            if (slug.toLowerCase() === e.target.value.toLowerCase()) {
                this.inValidSlug = true;
            }
        });
    }

    addTool(value) {
        this.detailsView = !this.detailsView;
        const type = this.form.controls.details as FormArray;
        if (value === 'img') {
            type.push(this.fb.group({
                type: 'img',
                imgURL: ['', Validators.required],
                imageHeight: '30',
                alignment: 'center',
                verticalAlignment: 'center',
                objectFit: 'cover',
            }));
        } else if (value === 'text') {
            type.push(this.fb.group({
                type: 'text',
                title: '',
                description: ['', [Validators.required]],
                author: false,
                border: false,
            }));
        } else if (value === 'slider') {
            type.push(this.fb.group({
                type: 'slider',
                size: 'big',
                alignment: 'center',
                verticalAlignment: 'center',
                objectFit: 'cover',
                sliders: this.fb.array([])
            }));
        } else if (value === 'video') {
            type.push(this.fb.group({
                type: 'video',
                videoURL: ['', [Validators.required]]
            }));
        }
    }

    createDetailsForm() {
        setTimeout(() => {
            const type = this.form.controls.details as FormArray;
            this.work.details.forEach((w, i) => {
                if (w.type === 'img') {
                    type.push(this.fb.group(
                        {
                            type: w.type,
                            imgURL: [w.imgURL, Validators.required],
                            imageHeight: w.imageHeight,
                            alignment: w.alignment,
                            verticalAlignment: w.verticalAlignment,
                            objectFit: w.objectFit,
                        }
                    ));
                } else if (w.type === 'text') {
                    type.push(this.fb.group({
                        type: w.type,
                        title: w.title,
                        description: [w.description, [Validators.required]],
                        author: w.author,
                        border: w.border,
                    }));
                } else if (w.type === 'slider') {
                    type.push(this.fb.group({
                        type: w.type,
                        size: w.size,
                        alignment: w.alignment,
                        verticalAlignment: w.verticalAlignment,
                        objectFit: w.objectFit,
                        sliders: this.fb.array(this.creasteSliderEditForm(i))
                    }));
                } else if (w.type === 'video') {
                    type.push(this.fb.group({
                        type: 'video',
                        videoURL: [w.videoURL, [Validators.required]]
                    }));
                }
            });
        });
        return [];
    }


    handleChange(file): void {
        console.log(file);
        // const status = file.status;
        // if (status !== 'uploading') {
        //     console.log(file, fileList);
        // }
        // if (status === 'done') {
        //     this.msg.success(`${file.name} file uploaded successfully.`);
        // } else if (status === 'error') {
        //     this.msg.error(`${file.name} file upload failed.`);
        // }
    }


    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            this.imagePath = file;
            reader.readAsDataURL(this.imagePath);
            reader.onload = () => {
                this.form.get('imgURL').setValue(reader.result);
            };
        }
    }

    image(event, i) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            const reader = new FileReader();
            this.imagePath = file;
            reader.readAsDataURL(this.imagePath);
            reader.onload = () => {
                this.form.get('details')['controls'][i].get('imgURL').setValue(reader.result);
            };
        }
    }

    video(event, i) {
        this.videoPath = null;

        if (event.target.files.length > 0) {

            if (this.work) {


                if (this.form.get('details')['controls'][i].value.videoURL) {
                    const random = this.generateRandomString(10);
                    const file = event.target.files[0];

                    this.videosArr.push(this.form.get('details')['controls'][i].value.videoURL);

                    this.videosArrOnDestroy.push(random + file.name);

                    const form = new FormData();
                    form.append('random', random);
                    form.append('video', file);
                    form.append('delete', JSON.stringify(false));

                    this.workService.changeVideo(this.form.get('details')['controls'][i].value.videoURL, form).subscribe(data => {
                        this.form.get('details')['controls'][i].get('videoURL').setValue(data['video']);
                        this.videoPath = 'video' + i;
                    }, e => {
                        console.log(e);
                    });
                } else {
                    const random = this.generateRandomString(10);
                    const file = event.target.files[0];

                    // this.videosArr.push(this.form.get('details')['controls'][i].value.videoURL);

                    // this.videosArrOnDestroy.push(random + file.name);

                    const form = new FormData();
                    form.append('random', random);
                    form.append('video', file);
                    this.workService.addVideo(form).subscribe(data => {
                        this.form.get('details')['controls'][i].get('videoURL').setValue(data['video']);
                        console.log(this.form.value);
                    }, e => {
                        console.log(e);
                    });
                }


            } else {
                if (this.form.get('details')['controls'][i].value.videoURL) {
                    const random = this.generateRandomString(10);
                    const file = event.target.files[0];

                    // this.videosArr.push(this.form.get('details')['controls'][i].value.videoURL);

                    // this.videosArrOnDestroy.push(random + file.name);

                    const form = new FormData();
                    form.append('random', random);
                    form.append('video', file);
                    form.append('delete', JSON.stringify(true));
                    this.workService.changeVideo(this.form.get('details')['controls'][i].value.videoURL, form).subscribe(data => {
                        this.form.get('details')['controls'][i].get('videoURL').setValue(data['video']);
                        this.videoPath = 'video' + i;
                    }, e => {
                        console.log(e);
                    });
                } else {
                    const random = this.generateRandomString(10);
                    const file = event.target.files[0];

                    // this.videosArr.push(this.form.get('details')['controls'][i].value.videoURL);

                    // this.videosArrOnDestroy.push(random + file.name);

                    const form = new FormData();
                    form.append('random', random);
                    form.append('video', file);
                    this.workService.addVideo(form).subscribe(data => {
                        this.form.get('details')['controls'][i].get('videoURL').setValue(data['video']);
                        console.log(this.form.value);
                    }, e => {
                        console.log(e);
                    });
                }
            }


        }
    }

    slider(event, i, j) {
        if (this.imgId) {
            j = this.imgId
            this.sliderImgView(event, i, j);
            // this.imgChange = false;
            this.imgId = null;

        } else {
            if (event.target.files.length > 0) {
                this.createSlidersForm(() => {
                    this.sliderImgView(event, i, j);
                });
            }
        }

    }


    createSlidersForm(cb) {
        const length = this.form.controls.details['controls'].length;
        const count = this.form.controls.details['controls'][length - 1].controls.sliders as FormArray;
        count.push(this.fb.group({
            imgURL: ['', [Validators.required]]
        }));
        cb();
        return [];
    }

    creasteSliderEditForm(i) {
        setTimeout(() => {
            const count = this.form.controls.details['controls'][i].controls.sliders as FormArray;

            this.work.details[i].sliders.forEach((s) => {
                count.push(this.fb.group({
                    imgURL: [s.imgURL, [Validators.required]]
                }));
            });
        });
        return [];
    }

    sliderImgView(event, i, j) {
        const file = event.target.files[0];
        const reader = new FileReader();
        this.imagePath = file;
        reader.readAsDataURL(this.imagePath);
        this.imagePath = null;
        reader.onload = () => {
            this.form.get('details')['controls'][i].controls.sliders.controls[j].controls.imgURL.setValue(reader.result);
            console.log(this.form.value);
        };
    }

    addTools() {
        this.detailsView = !this.detailsView;
    }

    changeImg(i, index) {
        this.imgId = index;
        document.getElementById('file_slider' + i).click()
    }


    myWork() {
        if (this.work) {
            const form = {
                work: this.form.value,
                videosArr: this.videosArr
            };
            this.workService.putWork(this.work._id, form).subscribe(data => {
                this.router.navigate(['work']);
            })
        } else {
            this.workService.postWork(this.form.value).subscribe(data => {
                this.router.navigate(['work']);
            }, e => console.log(e))
        }

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


    removeFormEl(i): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this portfolio ?',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => {
                const type = this.form.controls.details as FormArray;
                type.removeAt(i);
            },
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }


    removeVideo(i): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this portfolio ?',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => {
                const type = this.form.controls.details as FormArray;
                const id = type.value[i].videoURL;
                if (id) {
                    this.workService.deleteVideo(id).subscribe(data => {
                        type.removeAt(i);
                    }, e => console.log(e))
                } else {
                    type.removeAt(i);
                }

            },
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }

    removeSliderImage(i, index) {

        this.modalService.confirm({
            nzTitle: 'Are you sure delete this portfolio ?',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => {
                const type = this.form.controls.details['controls'][i].controls.sliders as FormArray;
                type.removeAt(index);
            },
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });


        // this.delete = confirm('Are you want to delete?');
        // const images = this.serviceForm.controls.details['controls'][detail].controls.sliders['controls'][row].controls.imagesURL as FormArray;
        // if (this.delete) {
        //     images.removeAt(i);
        // }

    }

    ngOnDestroy(): void {
        if (this.videosArrOnDestroy.length > 0) {
            this.workService.deleteVideoMany(this.videosArrOnDestroy).subscribe(data => {
                console.log(data);
            }, e => console.log(e));
        }

    }


}
