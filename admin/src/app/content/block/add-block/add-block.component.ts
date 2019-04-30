import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {PostsService} from '../../../shared/services/posts.service';
import {PortfolioService} from '../../../shared/services/portfolio.service';
import {Router} from '@angular/router';
import {BlockService} from '../../../shared/services/block.service';

@Component({
    selector: 'app-add-block',
    templateUrl: './add-block.component.html',
    styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {
    color = '#000';
    blockTypes;
    blockForm;
    stories;
    portfolios;
    selectedType;
    submitted = false;
    dropdownSettings;
    dropdownList;
    imageForm;
    formData;
    obj;

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private storyService: PostsService,
        private portfolioService: PortfolioService,
        private blockService: BlockService,
    ) {
        this.formData = new FormData();
    }

    ngOnInit(): void {
        this.buildForm();
        this.getProjects();
        this.getStoriesSettings();
    }

    addControlByType(event) {
        this.imageForm = this.fb.group({
            image: [null],
            bgColor: [null],
            bgSize: [null],
            animation: [null],
            animationText: [null],
            url: [null],
            mp3: [null],
        });

        this.selectedType = this.blockForm.value.type;
        if (this.selectedType === 'Stories') {
            this.blockForm.removeControl('portfolio');
            this.blockForm.removeControl('video');
            this.blockForm.removeControl('content');
            this.blockForm.addControl('stories', new FormControl(null, Validators.required));
        }
        if (this.selectedType === 'Portfolio') {
            this.blockForm.removeControl('stories');
            this.blockForm.removeControl('video');
            this.blockForm.removeControl('content');
            this.blockForm.addControl('portfolio', new FormControl(null, Validators.required));
        }
        if (this.selectedType === 'Video') {
            this.blockForm.removeControl('stories');
            this.blockForm.removeControl('portfolio');
            this.blockForm.removeControl('content');
            this.blockForm.addControl('video', new FormControl(null, Validators.required));
        }
        if (this.selectedType === 'Image') {
            this.blockForm.removeControl('stories');
            this.blockForm.removeControl('portfolio');
            this.blockForm.removeControl('video');
            this.blockForm.addControl('content', this.imageForm);
        }
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
        this.blockTypes = ['', 'Portfolio', 'Stories', 'Video', 'Image'];
        this.blockForm = this.fb.group({
            name: [null, [Validators.required]],
            size: [null, [Validators.required]],
            type: [null, [Validators.required]],
        });
    }

    saveBlock() {
        console.log(this.blockForm.value);
        if (this.selectedType === 'Image') {
            this.imageForm.get('bgColor').setValue(this.color);
            this.formData.append('image', this.imageForm.get('image').value);
        }

        this.formData.append('data', JSON.stringify(this.blockForm.value));

        this.blockService.postBlock(this.formData).subscribe(
            d => {
                if (d) {
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
                    console.log(444);
                    this.imageForm.get('image').setValue(img);
                } else if (selector === 'mp3') {
                    const mp3 = event.target.files[0];
                    console.log(5555);
                    this.imageForm.get('mp3').setValue(mp3);
                }
            }
            console.log(event.target.files);
        }
    }

}
// if(this.file.name.match(/\.(avi|mp3|mp4|mpeg|ogg)$/i))