import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from '../../../shared/services/team.service';
import {ResponsiveData} from '../../../../../../client/src/app/_models/ResponsiveData';
import {ActionsService} from '../../../../../../client/src/app/_services/actions.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-edit-team',
    templateUrl: './edit-team.component.html',
    styleUrls: ['./edit-team.component.scss']
})
export class EditTeamComponent implements OnInit, OnDestroy {

    // // // Font Size // // //
    windowSubscription: Subscription;
    windowSize: ResponsiveData;

    isVisible = false;
    isOkLoading = false;
    modalContent = '';
    public imagePath;

    teamId = '';
    type = '';
    field = '';
    row = '';
    prop = '';
    index: number;
    blocks = [1, 2, 3, 4, 5, 6, 7];

    done = false;


    isElementBlock = false;


    introduce = {
        title: '',
        description: '',
        backgroundImage: ''
    };


    element = {
        title: '',
        blocks: []

    };

    client = {
        title: '',
        description: '',
        blocks: []
    };


    remark = {
        title: '',
        description: '',
    };


    leadership = {
        title: '',
        description: '',
        first: {
            avatar: '',
            name: '',
            job: ''
        },
        second: {
            avatar: '',
            name: '',
            job: ''
        }
    };

    awards = {
        title: '',
        description: '',
        first: [],
        blocks: []
    };


    @HostListener('window:resize', ['$event']) onResize(e) {
        if (window.innerWidth > 767) {
            const size = {
                width: window.innerWidth > 1920 ? 1920 : window.innerWidth,
                height: window.innerHeight,
                rate:
                    window.innerWidth >= 1920 ? 1 :
                        window.innerWidth < 1520 && window.innerWidth > 1220 ? 1.20 :
                            window.innerWidth < 1220 && window.innerWidth > 1020 ? 1.25 :
                                window.innerWidth < 1024 && window.innerWidth > 820 ? 1.30 :
                                    window.innerWidth < 820 && window.innerWidth > 767 ? 1.35 : 1
            };
            this.actionsService.responsiveData.next(size);
            this.actionsService.mobileResponsiveData.next(768);
        } else {
            const width = window.innerWidth;
            this.actionsService.mobileResponsiveData.next(width);
        }
    }

    constructor(
        private teamService: TeamService,
        private actionsService: ActionsService
    ) {
        this.teamService.getTeam().subscribe(data => {
            this.teamId = data[0]._id;
            this.introduce = data[0].introduce;
            this.element = data[0].element;
            this.client = data[0].client;
            this.remark = data[0].remark;
            this.leadership = data[0].leadership;
            this.awards = data[0].awards;
            this.done = true;
        }, e => console.log(e));

        this.windowSubscription = actionsService.getWindowSize()
            .subscribe((size: ResponsiveData) => this.windowSize = size);

    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.windowSubscription.unsubscribe();
    }

    myIntroduce(e, field) {
        this.type = 'introduce';
        this.field = field;


        if (field === 'backgroundImage') {
            if (e.target.files.length > 0) {
                const file = e.target.files[0];
                const reader = new FileReader();
                this.imagePath = file;
                reader.readAsDataURL(this.imagePath);
                reader.onload = () => {
                    this.introduce[this.field] = reader.result;
                    this.updateTeam({
                        introduce: this.introduce
                    });
                };
            }
        } else {
            this.modalContent = e;
            this.isVisible = true;
        }
    }

    myElement(e, field) {
        this.isElementBlock = false;
        this.type = 'element';
        this.field = field;
        this.modalContent = e;
        this.isVisible = true;
    }

    elementBlock(i, field) {
        this.isElementBlock = true;
        this.type = 'element';
        this.field = field;
        this.index = i;
        this.modalContent = this.element.blocks[i][field];
        this.isVisible = true;
    }

    myClient(e, field) {
        this.type = 'client';
        this.field = field;
        this.modalContent = e;
        this.isVisible = true;
    }


    myRemark(e, field) {
        this.type = 'remark';
        this.field = field;
        this.modalContent = e;
        this.isVisible = true;
    }


    myLeadership(e, field, prop) {
        this.type = 'leadership';
        this.field = field;
        this.prop = prop;
        if (prop) {
            if (prop === 'avatar') {
                document.getElementById(field + '_' + prop).click();
            } else {
                this.modalContent = e;
                this.isVisible = true;
            }

        } else {
            this.modalContent = e;
            this.isVisible = true;
        }
    }


    myAwards(e, filed) {
        this.type = 'awards';
        this.field = filed;
        this.modalContent = e;
        this.isVisible = true;

    }

    awardsFirst(e, i) {
        this.type = 'awards_first';
        this.modalContent = e;
        this.field = i;
        this.isVisible = true;
    }

    clientImage(e) {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const reader = new FileReader();
            this.imagePath = file;
            reader.readAsDataURL(this.imagePath);
            reader.onload = () => {
                this.client.blocks[this.index].backGround = reader.result;
                this.updateTeam({
                    client: this.client
                });
            };
        }
    }


    clientBlock(i) {
        this.type = 'client';
        this.index = i;
        if (i === 4) {
            this.modalContent = this.client.blocks[i].text;
            this.isVisible = true;

        } else {
            document.getElementById('clientBlock' + i).click();
        }
    }

    leadershipImage(e) {
        if (e.target.files.length > 0) {

            const file = e.target.files[0];
            const reader = new FileReader();
            this.imagePath = file;
            reader.readAsDataURL(this.imagePath);
            reader.onload = () => {
                this.leadership[this.field][this.prop] = reader.result;

                this.updateTeam({
                    leadership: this.leadership
                });
            };
        }
    }


    awardsBlock(name, i) {
        this.field = i;
        document.getElementById(name + i).click();
    }

    awardsImage(e) {
        if (e.target.files.length > 0) {

            const file = e.target.files[0];
            const reader = new FileReader();
            this.imagePath = file;
            reader.readAsDataURL(this.imagePath);
            reader.onload = () => {
                this.awards.blocks[this.field] = reader.result;

                this.updateTeam({
                    awards: this.awards
                });
            };
        }
    }


    handleOk()
        :
        void {
        this.isOkLoading = true;

        if (this.modalContent) {
            if (this.type === 'introduce') {
                this.introduce[this.field] = this.modalContent;

                this.updateTeam({
                    introduce: this.introduce
                });

            } else if (this.type === 'element') {
                if (this.isElementBlock) {
                    this.element.blocks[this.index][this.field] = this.modalContent;

                } else {
                    this.element[this.field] = this.modalContent;

                }

                this.updateTeam({
                    element: this.element
                });
            } else if (this.type === 'client') {
                if (this.index === 4) {
                    this.client.blocks[this.index].text = this.modalContent;

                } else {
                    this.client[this.field] = this.modalContent;

                }

                this.updateTeam({
                    client: this.client
                });

            } else if (this.type === 'remark') {
                this.remark[this.field] = this.modalContent;

                this.updateTeam({
                    remark: this.remark
                });

            } else if (this.type === 'leadership') {
                if (this.prop) {
                    this.leadership[this.field][this.prop] = this.modalContent;
                } else {
                    this.leadership[this.field] = this.modalContent;
                }

                this.updateTeam({
                    remark: this.remark
                });
            } else if (this.type === 'awards') {
                this.awards[this.field] = this.modalContent;

                this.updateTeam({
                    awards: this.awards
                });
            } else if (this.type === 'awards_first') {
                this.awards.first[this.field] = this.modalContent;

                this.updateTeam({
                    awards: this.awards
                });
            }


        }


        setTimeout(() => {
            this.isVisible = false;
            this.isOkLoading = false;
        }, 0);
    }

    handleCancel()
        :
        void {
        this.isVisible = false;
    }


    updateTeam(obj) {
        this.teamService.putTeam(this.teamId, obj).subscribe(data => {
            console.log(data);
        }, e => console.log(e));
    }

}
