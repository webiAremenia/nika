import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NzMessageService, NzModalService, UploadFile} from 'ng-zorro-antd';
import {WorkService} from '../../../shared/services/work.service';
import {AppGlobals} from '../../../app.globals';

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
    videoUrl;
    destroyWork = true;
    coverImg: File;
    coverImgsrc;
    options;
    // color = 'yellow';


    fontSizeMin = 10;
    fontSizeMax = 100;

    lineHeightMin = 10;
    lineHeightMax = 100;

    textForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private msg: NzMessageService,
        private modalService: NzModalService,
        private workService: WorkService,
        config: AppGlobals
    ) {
        this.videoUrl = config.imageUrl;
        if (this.workService.candidateWork) {
            this.work = this.workService.candidateWork;
            // this.work.color ? this.color = this.work.color : this.color = 'black';
            // this.color = this.work.color;
        }
        this.workService.getWorks().subscribe((data: Array<any>) => {
            data.forEach(w => {
                this.slugs.push(w.slug);
            });

        }, err => {
            console.log(err);
        });
    }

    ngOnInit() {

        this.options = {
            onUpdate: (event: any) => {
                const arr = [];
                let i = 0;
                const type = this.form.controls.details as FormArray;
                this.updateOrders(type.value)
                // this.menus.forEach(item => {
                //     arr.push(item._id);
                //     ++i;
                // });
                // console.log(arr)
                // this.service.sortMenus(arr).subscribe((data) => {
                // });
            }
        };


        this.form = this.fb.group({
            slug: [this.work ? this.work.slug : '', [Validators.required, Validators.pattern('^[a-zA-Z0-9_-]*$')]],
            color: [this.work ? this.work.color : 'black', Validators.required],
            title: this.work ? this.createFontFormforUpdate(this.work, 'title') : this.createFontForm(),
            subTitle: this.work ? this.createFontFormforUpdate(this.work, 'subTitle') : this.createFontForm(),
            description: this.work ? this.createFontFormforUpdate(this.work, 'description') : this.createFontForm(),
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

    colorChange(e) {
        this.form.controls.color.setValue(e);

        console.log(this.form.value)
    }

    createFontForm() {
        return this.fb.group({
            text: ['', Validators.required],
            fontSize: 15,
            fontFamily: null,
            fontWeight: 'regular'
        });
    }

    createFontFormforUpdate(work, type) {
        return this.fb.group({
            text: [work[type].text, Validators.required],
            fontSize: work[type].fontSize ? work[type].fontSize : 15,
            fontFamily: work[type].fontFamily,
            fontWeight: work[type].fontWeight

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
                order: null
            }));

        } else if (value === 'text') {
            type.push(this.fb.group({
                type: 'text',
                title: this.createFontForm(),
                description: this.createFontForm(),
                author: false,
                border: false,
                order: null
            }));

        } else if (value === 'slider') {
            type.push(this.fb.group({
                type: 'slider',
                size: 'big',
                alignment: 'center',
                verticalAlignment: 'center',
                objectFit: 'cover',
                order: null,
                sliders: this.fb.array([])
            }));
        } else if (value === 'video') {
            type.push(this.fb.group({
                type: 'video',
                order: null,
                videoURL: ['', [Validators.required]]
            }));
        } else if (value === 'column') {
            type.push(this.fb.group({
                type: 'column',
                title: this.fb.group({
                    fontSize: 15,
                    fontFamily: null,
                    fontWeight: 'regular'

                }),
                description: this.fb.group({
                    fontSize: 15,
                    fontFamily: null,
                    fontWeight: 'regular'
                }),
                col1: this.fb.group({
                    title: '',
                    description: [''],
                }),
                col2: this.fb.group({
                    title: '',
                    description: [''],
                }),
                col3: this.fb.group({
                    title: '',
                    description: [''],
                }),
                order: null
            }));
        }
        this.updateOrders(type.value);
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
                        // title: w.title,
                        // description: [w.description, [Validators.required]],

                        title: this.createFontFormforUpdate(w, 'title'),
                        description: this.createFontFormforUpdate(w, 'description'),

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
                } else if (w.type === 'column') {
                    type.push(this.fb.group({
                        type: w.type,
                        title: this.fb.group({
                            fontSize: w.title.fontSize ? w.title.fontSize : 15,
                            fontFamily: w.title.fontFamily,
                            fontWeight: w.title.fontWeight

                        }),
                        description: this.fb.group({
                            fontSize: w.description.fontSize ? w.description.fontSize : 15,
                            fontFamily: w.description.fontFamily,
                            fontWeight: w.description.fontWeight

                        }),
                        col1: this.fb.group({
                            title: w.col1.title,
                            description: w.col1.description,
                        }),
                        col2: this.fb.group({
                            title: w.col2.title,
                            description: w.col2.description,
                        }),
                        col3: this.fb.group({
                            title: w.col3.title,
                            description: w.col3.description,
                        })
                    }));
                }
            });
        });
        return [];
    }

    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.coverImg = event.target.files[0];
            const reader = new FileReader();
            this.imagePath = file;
            reader.readAsDataURL(this.imagePath);
            reader.onload = () => {
                this.form.get('imgURL').setValue(this.coverImg);
                this.coverImgsrc = reader.result;
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
                    this.msg.loading('Uploading file', {nzDuration: 0});

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
                        this.msg.remove();
                        this.msg.success('upload successfully.');
                    }, e => {
                        console.log(e);
                    });
                } else {
                    this.msg.loading('Uploading file', {nzDuration: 0});

                    const random = this.generateRandomString(10);
                    const file = event.target.files[0];

                    // this.videosArr.push(this.form.get('details')['controls'][i].value.videoURL);

                    this.videosArrOnDestroy.push(random + file.name);

                    const form = new FormData();
                    form.append('random', random);
                    form.append('video', file);
                    this.workService.addVideo(form).subscribe(data => {
                        this.form.get('details')['controls'][i].get('videoURL').setValue(data['video']);
                        this.msg.remove();
                        this.msg.success('upload successfully.');
                    }, e => {
                        console.log(e);
                    });
                }


            } else {
                if (this.form.get('details')['controls'][i].value.videoURL) {

                    this.msg.loading('Uploading file', {nzDuration: 0});
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
                        this.msg.remove();
                        this.msg.success('upload successfully.');
                    }, e => {
                        console.log(e);
                    });
                } else {
                    this.msg.loading('Uploading file', {nzDuration: 0});

                    const random = this.generateRandomString(10);
                    const file = event.target.files[0];

                    // this.videosArr.push(this.form.get('details')['controls'][i].value.videoURL);

                    // this.videosArrOnDestroy.push(random + file.name);

                    const form = new FormData();
                    form.append('random', random);
                    form.append('video', file);
                    this.workService.addVideo(form).subscribe(data => {
                        this.form.get('details')['controls'][i].get('videoURL').setValue(data['video']);
                        this.msg.remove();
                        this.msg.success('upload successfully.');
                    }, e => {
                        console.log(e);
                    });
                }
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
            this.imgId = null;
        };
    }

    addTools() {
        this.detailsView = !this.detailsView;
    }

    changeImg(i, index) {
        this.imgId = index;
        document.getElementById('file_slider' + i).click();
    }

    slider(event, i, j) {

        if (this.imgId || this.imgId === 0) {
            this.sliderImgView(event, i, this.imgId);
            this.imgId = null;
            // this.imgChange = false;

        } else {
            if (event.target.files.length > 0) {
                this.createSlidersForm(() => {
                    this.sliderImgView(event, i, j);
                });
            }
        }

    }


    myWork() {

        // this.form.controls.color.setValue(this.color);



        if (this.work) {
            this.msg.loading('Updating', {nzDuration: 0});

            const random = this.generateRandomString(10);

            const fd = new FormData();


            const videosArr = JSON.stringify(this.videosArr);

            const details = JSON.stringify(this.form.value.details);
            const title = JSON.stringify(this.form.value.title);
            const subTitle = JSON.stringify(this.form.value.subTitle);
            const description = JSON.stringify(this.form.value.description);


            fd.append('random', random);
            fd.append('cover', this.coverImg);
            fd.append('slug', this.form.value.slug);
            fd.append('color', this.form.value.color);
            fd.append('title', title);
            fd.append('subTitle', subTitle);
            fd.append('description', description);
            fd.append('details', details);
            fd.append('videosArr', videosArr);

            this.workService.putWork(this.work._id, fd).subscribe(data => {
                this.destroyWork = false;
                this.msg.remove();
                this.msg.success('Update successfully.');
                this.router.navigate(['works']);
            });
        } else {
            this.msg.loading('Creating', {nzDuration: 0});

            const random = this.generateRandomString(10);

            const fd = new FormData();

            const details = JSON.stringify(this.form.value.details);
            const title = JSON.stringify(this.form.value.title);
            const subTitle = JSON.stringify(this.form.value.subTitle);
            const description = JSON.stringify(this.form.value.description);

            fd.append('random', random);
            fd.append('cover', this.coverImg);
            fd.append('slug', this.form.value.slug);
            fd.append('color', this.form.value.color);
            fd.append('title', title);
            fd.append('subTitle', subTitle);
            fd.append('description', description);
            fd.append('details', details);


            this.workService.postWork(fd).subscribe(data => {
                this.msg.remove();
                this.msg.success('Create successfully.');
                this.router.navigate(['works']);
            }, e => console.log(e));
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
                this.updateOrders(type.value)
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
                    this.videosArr.push(type.value[i].videoURL);
                    type.removeAt(i);
                    // this.workService.deleteVideo(id).subscribe(data => {
                    //     type.removeAt(i);
                    // }, e => console.log(e))
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

    }

    updateOrders(arr) {
        arr.forEach((item, i) => {
            item.order = i;
        });
    }

    ngOnDestroy(): void {
        this.msg.remove();
        if (this.destroyWork) {
            if (this.videosArrOnDestroy.length > 0) {
                this.workService.deleteVideoMany(this.videosArrOnDestroy).subscribe(data => {
                }, e => console.log(e));
            }
        }
    }


}
