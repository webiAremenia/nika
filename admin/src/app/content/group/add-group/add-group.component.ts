import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../shared/services/group.service';
import {BlockService} from '../../../shared/services/block.service';

@Component({
    selector: 'app-add-group',
    templateUrl: './add-group.component.html',
    styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

    group;
    done = false;
    blocks;
    canBe = [];
    current;
    currentSize;


    constructor(
        private service: GroupService,
        private blockService: BlockService
    ) {
    }

    ngOnInit() {
        this.getGroup();
        this.blockService.getBlock().subscribe((data: []) => {
            this.blocks = data;
            // console.log(this.blocks);
        });
    }

    getGroup() {
        this.service.getGroup().subscribe(
            data => {
                this.group = data;
                this.done = true;
                console.log(data);
            },
            err => console.log(err)
        );
    }

    addLine() {
        this.service.addLine().subscribe(
            d => {
                if (d) {
                    this.getGroup();
                }
            },
            e => console.log(e)
        );
    }

    replace(index, id, position) {
        if (position === 'left') {
            document.getElementById('large-' + index).classList.replace('left', 'right');
            document.getElementById('middle-' + index).classList.replace('right', 'left');
            this.group[index].position = 'right';
            this.service.updatePosition(id, 'right').subscribe(
                d => '',
                e => console.log(e)
            );
        } else {
            document.getElementById('large-' + index).classList.replace('right', 'left');
            document.getElementById('middle-' + index).classList.replace('left', 'right');
            this.group[index].position = 'left';
            this.service.updatePosition(id, 'left').subscribe(
                d => '',
                e => console.log(e)
            );
        }
    }

    deleteLine(index, id) {
        if (confirm('Are you sure you want to delete ?')) {
            this.service.deleteLine(id).subscribe(
                d => {
                    if (d) {
                        this.getGroup();
                    }
                },
                e => console.log(e)
            );
        }
    }

    editBlock(id, size) {
        this.current = this.group.filter(el => el.id === id)[0];
        if (size === 'middle') {
            this.currentSize = 'middle';
            if (this.current.middleBlock.count === 0) {
                this.canBe = this.blocks.filter(el => el.size === 'middle' || el.size === 'small');
            } else if (this.current.middleBlock.count > 0 && this.current.middleBlock.count < 4) {
                this.canBe = this.blocks.filter(el => el.size === 'small');
            } else {
                this.canBe = [];
            }
        } else {
            this.currentSize = 'large';
            if (this.current.largeBlock.count === 0) {
                this.canBe = this.blocks;
            } else if (this.current.largeBlock.count > 0 && this.current.largeBlock.count < 6) {
                this.canBe = this.blocks.filter(el => el.size === 'small');
            } else {
                this.canBe = [];
            }
        }
    }

    pushToGroup( i, s, name) {
        if (this.currentSize === 'large') {
            this.current.largeBlock.blocks.push({size: s, block: i, blockTitle: name});
            if (s === 'large') {
                this.current.largeBlock.count += 6;
            }
            if (s === 'middle') {
                this.current.largeBlock.count += 4;
            }
            if (s === 'small') {
                this.current.largeBlock.count += 1;
            }
        }
        if (this.currentSize === 'middle') {
            this.current.middleBlock.blocks.push({size: s, block: i, blockTitle: name});
            if (s === 'middle') {
                this.current.middleBlock.count += 4;
            }
            if (s === 'small') {
                this.current.middleBlock.count += 1;
            }
        }
        this.service.addBlocks(this.current).subscribe(
            d => {
                if (d) {
                    this.getGroup();
                    setTimeout(() => {
                        this.editBlock(this.current.id, this.currentSize);
                    }, 500);
                }
            },
            e => console.log(e)
        );

        // console.log(this.current.id, this.currentSize);
    }

}
