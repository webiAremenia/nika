import { Component, OnInit } from '@angular/core';
import {SettingsService} from "../../../shared/services/settings.service";
import {Router} from "@angular/router";
import {NzModalService} from "ng-zorro-antd";

@Component({
  selector: 'app-settings-list',
  templateUrl: './settings-list.component.html',
  styleUrls: ['./settings-list.component.css']
})
export class SettingsListComponent implements OnInit {
settings: any = [];
key = '';
value = '';
  constructor(private service: SettingsService, private modalService: NzModalService) { }

  ngOnInit() {
    this.service.getSettings().subscribe((data: any[]) => {
      this.settings = data;
    })
  }
  add() {
    let settings = {
      key: this.key,
      value: this.value
    };
    this.service.addSettings(settings).subscribe((data) => {
      let items = this.settings;
      items.push(settings);
      this.settings = items;
      this.key = '';
      this.value = '';
      console.log(this.settings)
    })
  }

  edit(key , input) {
    let value = document.getElementById(input)['value'];
    let data = {
      key: key,
      value: value
    };
    this.service.changeSettings(data).subscribe((data) => {
    })

  }

  delete(key) {
    this.service.deleteSettings(key).subscribe((data) => {
      this.settings = this.settings.filter(item => item.key !== key);
    })
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
