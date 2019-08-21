import {Component, OnInit, ViewChild} from '@angular/core';
import {SettingsService} from '../../../shared/services/settings.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'app-settings-list',
    templateUrl: './settings-list.component.html',
    styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements OnInit {
    settings: any = [];
    key = '';
    value = '';
    flag = true;
    count = 0;
    p;
    button;
    id;
    inpId;
    butId;
    pId;
    @ViewChild('input') input;

    constructor(
        private service: SettingsService,
        private modalService: NzModalService) {
    }

    ngOnInit() {
        this.service.getSettings().subscribe((data: any[]) => {
            this.settings = data;
        });
    }

    add() {
        const settings = {
            key: this.key,
            value: this.value
        };
        this.service.addSettings(settings).subscribe((data) => {
            const items = this.settings;
            items.push(settings);
            this.settings = items;
            this.key = '';
            this.value = '';
        });
    }

    edit(key, val, input, par, but) {
        if (this.inpId) {
            const inp1 = document.getElementById(this.inpId) as HTMLInputElement;
            const button1 = document.getElementById(this.butId);
            const p1 = document.getElementById(this.pId);
            inp1.style.display = 'none';
            button1.style.display = 'none';
            p1.style.display = 'inline-block';

            const inp = document.getElementById(input) as HTMLInputElement;
            const p = document.getElementById(par);
            const button = document.getElementById(but);
            this.input = val;
            inp.type = 'text';
            inp.style.display = 'inline-block';
            p.style.display = 'none';
            button.style.display = 'inline-block';

        } else {
            const inp = document.getElementById(input) as HTMLInputElement;
            const p = document.getElementById(par);
            const button = document.getElementById(but);
            this.input = val;
            inp.type = 'text';
            inp.style.display = 'inline-block';
            p.style.display = 'none';
            button.style.display = 'inline-block';
        }

        this.inpId = input;
        this.butId = but;
        this.pId = par;
    }


    delete(key) {
        this.service.deleteSettings(key).subscribe((data) => {
            this.settings = this.settings.filter(item => item.key !== key);
        });
    }

    change(key, val, input, but, par) {
        const inp = document.getElementById(input) as HTMLInputElement;
        const p = document.getElementById(par);
        const button = document.getElementById(but);
        const data = {
            key,
            value: val
        };
        this.service.changeSettings(data).subscribe((d) => {
            inp.type = 'hidden';
            p.innerHTML = val;
            p.style.display = 'block';
            button.style.display = 'none';
            this.settings = d;
        });
    }

    showDeleteConfirm(data): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this settings ?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => this.delete(data),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }
}
