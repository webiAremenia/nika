import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../shared/services/posts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: any = [];
  items;
  tables: string[] = ['title', 'description'];
  searchValue;
  selectedValue = 'title';
  url = window.location.origin + '/_uploads/posts/';
  isVisibleMiddle = false;
  constructor(private service: PostsService, private router: Router) {
  }

  ngOnInit() {
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
      this.items = data;
      console.log(data);
    })
  }

  edit(post) {
    this.service.candidatePost = post;
    this.router.navigate(['content','changePost'])
  }

  delete(post) {
    this.service.candidatePost = post;
    this.service.deletePosts(post).subscribe((data) => {
      this.items = this.items.filter(items => items._id !== post._id);
      this.posts = this.posts.filter(items => items._id !== post._id);
    })
  }

  addPost() {
    this.router.navigate(['content','addPost'])
  }

  filter(val) {
    if (val && typeof(this.items[0][this.selectedValue]) !== 'number') {
      this.posts = this.items
        .filter(item => item[this.selectedValue + ''].toLocaleLowerCase().indexOf(val.toLocaleLowerCase()) >= 0);
    } else if (val && typeof(this.items[0][this.selectedValue]) === 'number') {
      this.posts = this.items
        .filter(item => (item[this.selectedValue + ''] + '').indexOf(val + '') >= 0);
    } else {
      this.posts = this.items;
    }
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

}
