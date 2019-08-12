import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../../shared/services/menu.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';

@Component({
    selector: 'app-menu-list',
    templateUrl: './menu-list.component.html',
    styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
    menus = [];
    options;
    orders = [];

    constructor(private service: MenuService, private router: Router, private modalService: NzModalService) {
    }

    ngOnInit() {
        this.options = {
            onUpdate: (event: any) => {
                const arr = [];
                let i = 0;
                this.menus.forEach(item => {
                    arr.push({
                        order: this.orders[i],
                        _id: item._id
                    });
                    ++i;
                });
                this.service.sortMenus(arr).subscribe((data) => {
                });
            }
        };
        this.service.getMenu().subscribe((data: []) => {
            this.menus = data;
        });
    }

    add() {
        this.router.navigate(['menu/addMenu']);
    }

    edit(menu) {
        this.service.candidateMenu = menu;
        this.router.navigate(['menu/changeMenu']);
    }

    remove(menu) {
        this.service.deleteMenu(menu).subscribe((data) => {
            this.menus = this.menus.filter(item => item._id !== menu._id);
        });
    }

    showDeleteConfirm(data): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this menu ?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => this.remove(data),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }


}
