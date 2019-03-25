import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content.component";
import {TestUserDataComponent} from "./test-user-data/test-user-data.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {ChangePostComponent} from "./posts/change-post/change-post.component";
import {AddPostComponent} from "./posts/add-post/add-post.component";

const routes: Routes = [
  {path: 'content', component: ContentComponent, children: [
      {path: 'posts', component: PostsListComponent},
      {path: 'changePost', component: ChangePostComponent},
      {path: 'addPost', component: AddPostComponent},
      {path: 'block', component: TestUserDataComponent},
      {path: 'menu', component: TestUserDataComponent},
      {path: 'media', component: TestUserDataComponent},
      {path: 'portfolio', component: TestUserDataComponent},
      {path: '**', redirectTo: 'posts', pathMatch: 'full'}
    ]},
  {path: '**', redirectTo: '/content', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ContentRoutingModule { }
