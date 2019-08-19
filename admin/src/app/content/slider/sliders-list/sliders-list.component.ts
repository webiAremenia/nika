import {Component, OnInit} from '@angular/core';
import {SliderService} from '../../../shared/services/slider.service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {MenuService} from '../../../shared/services/menu.service';

@Component({
    selector: 'app-sliders-list',
    templateUrl: './sliders-list.component.html',
    styleUrls: ['./sliders-list.component.css']
})
export class SlidersListComponent implements OnInit {
    sliders: any[] = [];
    url;
    menuKeys = [];
    menus = [];

    constructor(private service: SliderService, private modalService: NzModalService, private router: Router, private menuService: MenuService) {
    }

    ngOnInit() {
        this.url = this.service.url + '/uploads/medias/';
        this.menuService.getMenu().subscribe((data: []) => {

            this.menuKeys = data.map((m: { key: string }) => {
                return m.key;
            });
            this.service.menuKeys = this.menuKeys;
        });
        this.service.getSliders().subscribe((data: any[]) => {
            this.sliders = data;
            console.log(this.sliders)
        });
    }

    edit(slider) {
        this.service.candidateSlider = slider;
        this.router.navigate(['slider/changeSlider']);
    }

    delete(slider) {
        this.service.candidateSlider = slider;
        this.service.deleteSlider(slider).subscribe((data) => {
            this.sliders = this.sliders.filter(items => items._id !== slider._id);
        });
    }

    showDeleteConfirm(slider): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this slider ?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => this.delete(slider),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }

    addSlider() {
        this.router.navigate(['slider/addSlider']);
    }

}
