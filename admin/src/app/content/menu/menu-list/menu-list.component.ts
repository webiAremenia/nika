import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {config} from 'rxjs';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
    menus = [];
    options;
    orders = [];
    keys = ['about', 'works', 'contact'];


    constructor(private service: MenuService, private router: Router, private modalService: NzModalService) {
    }

    ngOnInit() {
        this.options = {
            onUpdate: (event: any) => {
                const arr = [];
                let i = 0;
                this.menus.forEach(item => {
                    arr.push(item._id);
                    ++i;
                });
                console.log(arr)
                this.service.sortMenus(arr).subscribe((data) => {
                });
            }
        };
        this.service.getMenu().subscribe((data: []) => {
            this.menus = data;
        });
    }

    addMenu() {
        this.router.navigate(['menu/addMenu']);
    }

    edit(menu) {
        this.service.candidateMenu = menu;
        this.router.navigate(['menu/changeMenu']);
    }

    remove(id) {
        this.service.deleteMenu(id).subscribe((data) => {
            this.menus = this.menus.filter(item => item._id !== id);
        });
    }

    showDeleteConfirm(id, key): void {
        if (this.keys.indexOf(key) === -1) {
            this.modalService.confirm({
                nzTitle: 'Are you sure delete this menu ?',
                nzContent: '<b style="color: red;">Some descriptions</b>',
                nzOkText: 'Yes',
                nzOkType: 'danger',
                nzOnOk: () => this.remove(id),
                nzCancelText: 'No',
                nzOnCancel: () => console.log('Cancel')
            });
        } else {
            this.modalService.confirm({
                nzTitle: 'You cant delete this menu',
                nzOkText: 'Ok',
                nzOkType: 'danger',
                // nzOnOk: () => this.remove(id),
                nzCancelText: 'Cancel',
                // nzOnCancel: () => console.log('Cancel')
            });
        }

    }


}
