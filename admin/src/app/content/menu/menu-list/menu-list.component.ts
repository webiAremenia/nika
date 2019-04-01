import { Component, OnInit } from '@angular/core';
import {MenuService} from "../../../shared/services/menu.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
menus = [];
options;
orders = [];
  constructor(private service: MenuService, private router: Router) { }

  ngOnInit() {
    this.options = {
      onUpdate: (event: any) => {
        console.log(this.menus)
      }
    };
    this.service.getMenu().subscribe((data: []) => {
      this.menus = data;
      data.forEach(item => {
        this.orders.push(item['order'])
      })
    })
  }
  add(){
    this.router.navigate(['addMenu']);
  };
  edit(menu){
    this.service.candidateMenu = menu;
    this.router.navigate(['changeMenu'])
  };
  remove(menu){
    this.service.deleteMenu(menu).subscribe((data) => {
      this.menus = this.menus.filter(item => item._id != menu._id)
    })
  };



}
