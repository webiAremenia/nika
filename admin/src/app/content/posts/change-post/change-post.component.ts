import {Component, OnInit} from '@angular/core';
import {PostsService} from '../../../shared/services/posts.service';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {AppGlobals} from '../../../app.globals';
import {SettingsService} from '../../../shared/services/settings.service';


@Component({
    selector: 'app-change-post',
    templateUrl: './change-post.component.html',
    styleUrls: ['./change-post.component.css']
})
export class ChangePostComponent implements OnInit {

    validateForm: FormGroup;
    uploading = false;
    fileList: UploadFile[] = [];
    post;
    url;
    previewImage;
    randomString;
    dirName;
    editorConfigs;
    apiKey;

    constructor(
        private settingService: SettingsService,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private service: PostsService,
        private router: Router,
        private globals: AppGlobals
    ) {
        if (!this.service.candidatePost) {
            this.router.navigate(['post']);
        }
        this.url = this.globals.url;
        this.apiKey = settingService.settings.filter(set => set.key === 'editor_api_key')[0].value;
    }

    ngOnInit(): void {
        this.post = this.service.candidatePost;
        this.validateForm = new FormGroup({
            title: new FormControl(this.post.title, [Validators.required]),
            description: new FormControl(this.post.description, [Validators.required]),
            content: new FormControl(this.post.content, [Validators.required]),
            alt: new FormControl(this.post.alt),
            image: new FormControl(this.post.image)
        });
        this.previewImage = this.url + '/uploads/posts/' + this.post.image;

        this.randomString = this.post.random;
        this.dirName = this.post.random;
        this.editorConfigs = {
            plugins: 'print preview fullpage powerpaste casechange importcss tinydrive searchreplace autolink' +
                ' autosave save directionality advcode visualblocks visualchars fullscreen image link media' +
                ' mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime' +
                ' advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern ' +
                'noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker ' +
                'emoticons',
            menubar: 'file edit view insert format tools table tc help',
            toolbar: 'undo redo | bold italic underline strikethrough | ' +
                'fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify |' +
                ' outdent indent |  numlist bullist checklist |' +
                ' forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak |' +
                ' charmap emoticons | fullscreen  preview save print |' +
                ' insertfile image media pageembed template link anchor codesample | a11ycheck ltr rtl ',

            imagetools_toolbar: 'rotateleft rotateright | flipv fliph | editimage imageoptions',
            images_upload_url: this.url + '/uploads/posts/ckeditor/' + this.dirName + '/',
            images_upload_handler: this.handlerEditor,
        };
    }

    handlerEditor = (blobInfo, success, failure) => {
        let formData;

        formData = new FormData();
        formData.append('random', this.randomString);
        formData.append('dirName', this.dirName);
        // formData.append('image', f);
        formData.append('image', blobInfo.blob(), blobInfo.filename());

        this.service.ckEditorSavePostImage(formData).subscribe((d: any) => {
                success(this.url + '/uploads/posts/ckeditor/' + this.dirName + '/' + d.filename);
            },
            e => console.log(e)
        );
    }

    beforeUpload = (file: UploadFile): boolean => {
        this.fileList = [];
        this.fileList = this.fileList.concat(file);
        this.previewImage = file.url || file.thumbUrl;
        return false;
    }

    handleUpload(): void {
        const formData = new FormData();
        if (this.fileList.length > 0) {
            this.fileList.forEach((file: any) => {
                formData.append('image', file);
            });
        } else {
            formData.append('image', this.validateForm.get('image').value);
        }

        formData.append('title', this.validateForm.get('title').value);
        formData.append('description', this.validateForm.get('description').value);
        formData.append('content', this.validateForm.get('content').value);
        formData.append('alt', this.validateForm.get('alt').value);
        this.uploading = true;
        this.service.putPosts(this.post._id, formData)
            .subscribe(
                () => {
                    this.uploading = false;
                    this.fileList = [];
                    this.msg.success('upload successfully.');
                    this.router.navigate(['post']);
                },
                () => {
                    this.uploading = false;
                    this.msg.error('upload failed.');
                }
            );
    }

    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            this.fileList[0] = event.target.files[0];
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = (e) => {
                this.previewImage = e.target;
            };
        }
    }


}
