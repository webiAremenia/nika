import {Component, OnInit} from '@angular/core';
import {GroupService} from '../../../shared/services/group.service';

@Component({
    selector: 'app-add-group',
    templateUrl: './add-group.component.html',
    styleUrls: ['./add-group.component.scss']
})
export class AddGroupComponent implements OnInit {

    group;
    done = false;

    constructor(private service: GroupService) {
    }

    ngOnInit() {
        this.getGroup();
        // console.log(this.group);
    }

    getGroup() {
        this.service.getGroup().subscribe(
            data => {
                this.group = data;
                this.done = true;
                // console.log(data);
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
                d => console.log(d),
                e => console.log(e)
            );
        } else {
            document.getElementById('large-' + index).classList.replace('right', 'left');
            document.getElementById('middle-' + index).classList.replace('left', 'right');
            this.group[index].position = 'left';
            this.service.updatePosition(id, 'left').subscribe(
                d => console.log(d),
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
        console.log(id, size);
    }

}
