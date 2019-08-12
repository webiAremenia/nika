import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {PostsService} from '../../../shared/services/posts.service';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {BlockService} from '../../../shared/services/block.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-change-block',
    templateUrl: './change-block.component.html',
    styleUrls: ['./change-block.component.css']
})
export class ChangeBlockComponent implements OnInit {
    color = '#000';
    gifBgColor = '#000';
    storiesBgColor = '#ffffff';
    portfoliosBgColor = '#ffffff';
    block;
    blockTypes;
    blockForm;
    stories;
    portfolios;
    selectedType;
    selectedItems = [];
    submitted = false;
    dropdownSettings;
    dropdownList;
    imageForm;
    gifForm;
    portfolioForm;
    formData;
    obj;
    previewImage;
    url;
    _type;

    constructor(
        private postService: PostsService,
        private blockService: BlockService,
        private portfolioService: PortfolioService,
        private storyService: PostsService,
        private fb: FormBuilder,
        private msg: NzMessageService,
        private router: Router) {

        if (!this.blockService.candidateBlock) {
            this.router.navigate(['block']);
        }
        this.formData = new FormData();
    }

    ngOnInit(): void {
        this.url = this.blockService.url + '/uploads/block/';
        this.block = this.blockService.candidateBlock;
        if (this.block.stories) {
            this.selectedItems = this.block.stories.map(s => {
                return {
                    id: s._id,
                    title: s.title
                };
            });
        }
        this.selectedType = this.block.type;
        this._type = this.block.type;
        this.buildForm();
        this.getProjects();
        this.getStoriesSettings();
        if (this.selectedType === 'Stories') {
            this.storiesBgColor = this.block.bgColor;
            this.blockForm = this.fb.group({
                stories: ['', Validators.required],
                bgColor: [this.block.bgColor, Validators.required]
            });
        } else if (this.selectedType === 'Portfolio') {
            this.portfoliosBgColor = this.block.bgColor;
            this.blockForm = this.fb.group({
                portfolio: [this.block.portfolio, Validators.required],
                bgColor: [this.block.bgColor]
            });
        } else if (this.selectedType === 'Video') {
            this.blockForm = this.fb.group({
                video: [this.block.video, Validators.required],
                videoText: [this.block.videoText, Validators.required]
            });
        } else if (this.selectedType === 'Image') {
            this.blockForm.addControl('content', this.getImageForm());
        } else if (this.selectedType === 'Twitter') {
            this.blockForm = this.fb.group({
                twitter: [this.block.twitter, Validators.required]
            });
        } else if (this.selectedType === 'GIF') {
            this.blockForm.addControl('gif', this.getGifForm());
        }
    }

    getImageForm() {
        this.color = this.block.content.bgColor;
        this.previewImage = this.url + this.block.content.image;
        this.imageForm = this.fb.group({
            image: [this.block.content.image],
            bgColor: [this.block.content.bgColor],
            bgSize: [this.block.content.bgSize],
            animation: [this.block.content.animation],
            animationText: [this.block.content.animationText],
            url: [this.block.content.url],
        });
        return this.imageForm;
    }

    getGifForm() {
        this.gifBgColor = this.block.gif.bgColor;
        this.gifForm = this.fb.group({
            gif: [this.block.gif.gif],
            mp3: [this.block.gif.mp3],
            bgColor: [this.block.gif.bgColor]
        });

        return this.gifForm;
    }

    getStoriesSettings() {
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'title',
            selectAllText: 'Select All',
        };

        this.storyService.getPosts().subscribe(
            d => {
                this.stories = d;
                this.dropdownList = this.stories.map(el => {
                    return {
                        title: el.title,
                        id: el._id
                    };
                });
            },
            e => console.log(e)
        );
    }

    getProjects() {
        this.portfolioService.getPortfolio().subscribe(
            d => this.portfolios = d,
            e => console.log(e)
        );
    }

    buildForm() {
        this.blockTypes = ['Portfolio', 'Stories', 'Video', 'Image', 'Twitter', 'GIF'];
        this.blockForm = this.fb.group({});
    }

    saveBlock() {
        let _stories = [];
        if (this.selectedType === 'Image') {
            this.imageForm.get('bgColor').setValue(this.color);
            this.formData.append('image', this.imageForm.get('image').value);
        } else if (this.selectedType === 'GIF') {
            this.gifForm.get('bgColor').setValue(this.gifBgColor);
            this.formData.append('gif', this.gifForm.get('gif').value);
            this.formData.append('mp3', this.gifForm.get('mp3').value);
        } else if (this.selectedType === 'Video') {
            this.formData.append('video', this.blockForm.get('video').value);
        } else if (this.selectedType === 'Stories') {
            _stories = this.blockForm.get('stories').value.map(s => {
                return s.id;
            });
            this.blockForm.get('stories').setValue(_stories);
            this.blockForm.get('bgColor').setValue(this.storiesBgColor);

        } else if (this.selectedType === 'Portfolio') {
            this.blockForm.get('bgColor').setValue(this.portfoliosBgColor);
        } else if (this.selectedType === 'Twitter') {
            if (this.blockForm.get('twitter').value.split('/')[5]) {
                this.blockForm.get('twitter').setValue(this.blockForm.get('twitter').value.split('/')[5]);
            }
        }

        this.formData.append('data', JSON.stringify(this.blockForm.value));
        this.blockService.putBlock(this.block._id, this.formData).subscribe(
            d => {
                if (d) {
                    this.msg.success('upload successfully.');
                    this.blockForm.reset();
                    this.router.navigate(['/block']);
                }
            },
            e => console.log(e)
        );
        this.blockForm.reset();
    }


    onFileSelect(event, selector) {
        if (event.target.files.length > 0) {
            // const file = event.target.files[0];
            if (this.selectedType === 'Image') {
                const img = event.target.files[0];
                if (selector === 'image') {
                    this.imageForm.get('image').setValue(img);
                }
            } else if (this.selectedType === 'Video') {
                const video = event.target.files[0];
                this.msg.success('Video is uploading');

                this.blockForm.get('video').setValue(video);
            } else if (this.selectedType === 'GIF') {
                const gif = event.target.files[0];
                if (selector === 'gif') {
                    this.gifForm.get('gif').setValue(gif);
                } else if (selector === 'mp3') {
                    const mp3 = event.target.files[0];
                    this.gifForm.get('mp3').setValue(mp3);
                }
            }

        }
    }
}
