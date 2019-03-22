import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  route: string;

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      // console.log(location.path())
    });
  }
  ngOnInit(): void {
  }


}

