import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PagesService} from '../../../shared/services/pages.service';
import {NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {
    pages: any = [];
  constructor(private router: Router, private service: PagesService, private modalService: NzModalService) { }

  ngOnInit() {
      this.service.getPages().subscribe(data => {
          this.pages = data;
      }, e => console.log(e));
  }

    showDeleteConfirm(id): void {
        this.modalService.confirm({
            nzTitle: 'Are you sure delete this settings ?',
            nzContent: '<b style="color: red;">Some descriptions</b>',
            nzOkText: 'Yes',
            nzOkType: 'danger',
            nzOnOk: () => this.delete(id),
            nzCancelText: 'No',
            nzOnCancel: () => console.log('Cancel')
        });
    }

    delete(id) {
      this.service.deletePage(id).subscribe((data) => {
            this.pages = this.pages.filter(item => item._id !== id);
        });
    }

    edit(page) {
        this.service.candidatePage = page;
        this.router.navigate(['page/changePage']);
    }

    addPage() {
        this.router.navigate(['page/addPage']);
    }

}
