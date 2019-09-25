import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {TeamService} from '../../../shared/services/team.service';
import {Introduce} from '../../../shared/models/introduce';
import {Element} from '../../../shared/models/element';
import {Client} from '../../../shared/models/client';
import {Remark} from '../../../shared/models/remark';
import {Leadership} from '../../../shared/models/leadership';
import {Awards} from '../../../shared/models/awards';
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
    fontFamily = 'Open Sans';
    fontSize = 3;
    lineHeight = 3;


    public imagePath;

    type = '';
    field = '';
    row = '';
    prop = '';
    index: number;
    blocks = [1, 2, 3, 4, 5, 6, 7];

    done = false;


    isElementBlock = false;


    // introduce = {
    //     _id: '',
    //     title: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     description: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     backgroundImage: ''
    // };
    // element = {
    //     _id: '',
    //     title: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     blocks: []
    // };
    // client = {
    //     _id: '',
    //     title: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     description: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     blocks: []
    // };
    // remark = {
    //     _id: '',
    //     title: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     description: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    // };
    // leadership = {
    //     _id: '',
    //     title: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     description: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     first: {
    //         avatar: '',
    //         name: {
    //             text: '',
    //             fontSize: '',
    //             lineHeight: '',
    //             fontFamily: '',
    //         },
    //         job: {
    //             text: '',
    //             fontSize: '',
    //             lineHeight: '',
    //             fontFamily: '',
    //         }
    //     },
    //     second: {
    //         avatar: '',
    //         name: {
    //             text: '',
    //             fontSize: '',
    //             lineHeight: '',
    //             fontFamily: '',
    //         },
    //         job: {
    //             text: '',
    //             fontSize: '',
    //             lineHeight: '',
    //             fontFamily: '',
    //         }
    //     }
    // };
    // awards = {
    //     _id: '',
    //     title: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     description: {
    //         text: '',
    //         fontSize: '',
    //         lineHeight: '',
    //         fontFamily: '',
    //     },
    //     first: [],
    //     blocks: []
    // };

    introduce: Introduce;
    element: Element;
    client: Client;
    remark: Remark;
    leadership: Leadership;
    awards: Awards;


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
        this.teamService.getTeam().subscribe((data: any) => {
            // console.log(data)
            // this.teamId = data[0]._id;
            this.introduce = data.introduces[0];
            this.element = data.elements[0];
            this.client = data.clients[0];
            this.remark = data.remarks[0];
            this.leadership = data.leaderships[0];
            this.awards = data.awards[0];


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


                    this.updateTeam(this.introduce._id, {
                        introduce: {
                            [this.field]: this.introduce[this.field]
                        }
                    });

                    // this.updateTeam({
                    //     introduce: this.introduce
                    // });
                };
            }
        } else {
            this.modalContent = e.text;
            this.fontSize = this.introduce[this.field].fontSize;
            this.lineHeight = this.introduce[this.field].lineHeight;
            this.fontFamily = this.introduce[this.field].fontFamily;
            this.isVisible = true;
        }
    }

    myElement(e, field) {
        this.isElementBlock = false;
        this.type = 'element';
        this.field = field;
        this.modalContent = e.text;
        this.fontSize = e.fontSize;
        this.lineHeight = e.lineHeight;
        this.fontFamily = e.fontFamily;
        this.isVisible = true;


    }

    elementBlock(i, field) {
        this.isElementBlock = true;
        this.type = 'element';
        this.field = field;
        this.index = i;
        this.modalContent = this.element.blocks[i][field].text;
        this.fontSize = this.element.blocks[i][field].fontSize;
        this.lineHeight = this.element.blocks[i][field].lineHeight;
        this.fontFamily = this.element.blocks[i][field].fontFamily;
        this.isVisible = true;
    }

    myClient(e, field) {
        this.type = 'client';
        this.field = field;
        this.modalContent = e.text;
        this.fontSize = e.fontSize;
        this.lineHeight = e.lineHeight;
        this.fontFamily = e.fontFamily;
        this.isVisible = true;
    }


    myRemark(e, field) {
        this.type = 'remark';
        this.field = field;
        this.modalContent = e.text;
        this.fontSize = e.fontSize;
        this.lineHeight = e.lineHeight;
        this.fontFamily = e.fontFamily;
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
                this.modalContent = e.text;
                this.fontSize = e.fontSize;
                this.lineHeight = e.lineHeight;
                this.fontFamily = e.fontFamily;
                this.isVisible = true;
            }

        } else {
            this.modalContent = e.text;
            this.fontSize = e.fontSize;
            this.lineHeight = e.lineHeight;
            this.fontFamily = e.fontFamily;
            this.isVisible = true;
        }
    }


    myAwards(e, filed) {
        this.type = 'awards';
        this.field = filed;
        this.modalContent = e.text;
        this.fontSize = e.fontSize;
        this.lineHeight = e.lineHeight;
        this.fontFamily = e.fontFamily;
        this.isVisible = true;

    }


    awardsFirst(e, i) {
        this.type = 'awards_first';
        this.modalContent = e.text;
        this.fontSize = e.fontSize;
        this.lineHeight = e.lineHeight;
        this.fontFamily = e.fontFamily;
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
                this.updateTeam(this.client._id, {
                    client: {
                        blocks: this.client.blocks
                    }
                });
            };
        }
    }


    clientBlock(i) {
        this.type = 'client';
        this.index = i;
        if (i === 4) {
            this.modalContent = this.client.blocks[i].text;
            this.fontSize = this.client.blocks[i].fontSize;
            this.lineHeight = this.client.blocks[i].lineHeight;
            this.fontFamily = this.client.blocks[i].fontFamily;
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

                this.updateTeam(this.leadership._id, {
                    leadership: {
                        [this.field]: this.leadership[this.field]
                    }
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

                this.updateTeam(this.awards._id, {
                    awards: {
                        blocks: this.awards.blocks
                    }
                });
            };
        }
    }


    handleOk(): void {
        this.isOkLoading = true;

        if (this.modalContent) {
            if (this.type === 'introduce') {

                this.introduce[this.field] = {
                    fontSize: this.fontSize,
                    lineHeight: this.lineHeight,
                    fontFamily: this.fontFamily,
                    text: this.modalContent
                };


                // this.introduce[this.field] = this.modalContent;

                // this.updateTeam({
                //     introduce: this.introduce[this.field]
                // });

                this.updateTeam(this.introduce._id, {
                    introduce: {
                        [this.field]: this.introduce[this.field]
                    }
                });

            } else if (this.type === 'element') {

                if (this.isElementBlock) {
                    this.element.blocks[this.index][this.field] = {
                        fontSize: this.fontSize,
                        lineHeight: this.lineHeight,
                        fontFamily: this.fontFamily,
                        text: this.modalContent
                    };

                    this.updateTeam(this.element._id, {
                        element: {
                            blocks: this.element.blocks
                        }
                    });

                } else {
                    this.element[this.field] = {
                        fontSize: this.fontSize,
                        lineHeight: this.lineHeight,
                        fontFamily: this.fontFamily,
                        text: this.modalContent
                    };

                    this.updateTeam(this.element._id, {
                        element: {
                            [this.field]: this.element[this.field]
                        }
                    });
                }

            } else if (this.type === 'client') {
                if (this.index === 4) {
                    this.client.blocks[this.index] = {
                        fontSize: this.fontSize,
                        lineHeight: this.lineHeight,
                        fontFamily: this.fontFamily,
                        text: this.modalContent
                    };
                    this.updateTeam(this.client._id, {
                        client: {
                            blocks: this.client.blocks
                        }
                    });

                } else {
                    this.client[this.field] = {
                        fontSize: this.fontSize,
                        lineHeight: this.lineHeight,
                        fontFamily: this.fontFamily,
                        text: this.modalContent
                    };

                    this.updateTeam(this.client._id, {
                        client: {
                            [this.field]: this.client[this.field]
                        }
                    });
                }

            } else if (this.type === 'remark') {
                this.remark[this.field] = {
                    fontSize: this.fontSize,
                    lineHeight: this.lineHeight,
                    fontFamily: this.fontFamily,
                    text: this.modalContent
                };

                this.updateTeam(this.remark._id, {
                    remark: {
                        [this.field]: this.remark[this.field]
                    }
                });

            } else if (this.type === 'leadership') {
                if (this.prop) {
                    this.leadership[this.field][this.prop] = {
                        fontSize: this.fontSize,
                        lineHeight: this.lineHeight,
                        fontFamily: this.fontFamily,
                        text: this.modalContent
                    };
                } else {
                    this.leadership[this.field] = {
                        fontSize: this.fontSize,
                        lineHeight: this.lineHeight,
                        fontFamily: this.fontFamily,
                        text: this.modalContent
                    };


                }


                this.updateTeam(this.leadership._id, {
                    leadership: {
                        [this.field]: this.leadership[this.field]
                    }
                });


            } else if (this.type === 'awards') {
                this.awards[this.field] = {
                    fontSize: this.fontSize,
                    lineHeight: this.lineHeight,
                    fontFamily: this.fontFamily,
                    text: this.modalContent
                };


                this.updateTeam(this.awards._id, {
                    awards: {
                        [this.field]: this.awards[this.field]
                    }
                });
            } else if (this.type === 'awards_first') {
                this.awards.first[this.field] = {
                    fontSize: this.fontSize,
                    lineHeight: this.lineHeight,
                    fontFamily: this.fontFamily,
                    text: this.modalContent
                };

                this.updateTeam(this.awards._id, {
                    awards: {
                        first: this.awards.first
                    }
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

    updateTeam(id, obj) {
        this.teamService.putTeam(id, obj).subscribe(data => {
        }, e => console.log(e));
    }

}
