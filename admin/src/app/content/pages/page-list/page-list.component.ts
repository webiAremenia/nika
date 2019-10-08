import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PagesService} from '../../../shared/services/pages.service';
import {NzModalService} from 'ng-zorro-antd';
import {MenuService} from '../../../shared/services/menu.service';

@Component({
    selector: 'app-page-list',
    templateUrl: './page-list.component.html',
    styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
    pages: any = [];
    menusKey: any = [];
    menus: any = [];

    constructor(private router: Router, private service: PagesService, private modalService: NzModalService, private menuService: MenuService) {
    }

    ngOnInit() {
        this.service.getPages().subscribe(data => {
            this.pages = data;
            console.log(this.pages);
        }, e => console.log(e));

        this.menuService.getMenu().subscribe((data: any) => {
            this.menus = data;
        }, e => console.log(e));
    }

    showDeleteConfirm(id, key): void {

        // console.log(this.haveMenu(key))
        let obj = this.haveMenu(key)


        if (!obj.success) {
            this.modalService.confirm({
                nzTitle: 'Are you sure delete this settings ?',
                nzContent: '<b style="color: red;">Some descriptions</b>',
                nzOkText: 'Yes',
                nzOkType: 'danger',
                nzOnOk: () => this.delete(id),
                nzCancelText: 'No',
                nzOnCancel: () => console.log('Cancel')
            });
        } else {
            this.modalService.confirm({
                nzTitle: 'es pageov menuy ka jnjem?',
                nzContent: '<b style="color: red;">Some descriptions</b>',
                nzOkText: 'Yes',
                nzOkType: 'danger',
                nzOnOk: () => this.deletePageAndMenu(id, obj.menuId),
                nzCancelText: 'No',
                nzOnCancel: () => console.log('Cancel')
            });
        }

    }

    delete(id) {
        this.service.deletePage(id).subscribe((data) => {
            this.pages = this.pages.filter(item => item._id !== id);
        });
    }

    deletePageAndMenu(id, menuId) {
        this.service.deletePage(id).subscribe((data) => {
            this.pages = this.pages.filter(item => item._id !== id);
            this.menuService.deleteMenu(menuId).subscribe(data => {
                console.log(data);
            })
        });

    }


    edit(page) {
        this.service.candidatePage = page;
        this.router.navigate(['page/changePage']);
    }

    addPage() {
        this.router.navigate(['page/addPage']);
    }


    haveMenu(key) {

        for (let i = 0; i < this.menus.length; ++i) {
            if (this.menus[i].key === key) {
                return {menuId: this.menus[i]._id, success: true};
            }
        }
        return {menuId: null, success: false};

    }

}
