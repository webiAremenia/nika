import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from "./content.component";
import {TestUserDataComponent} from "./test-user-data/test-user-data.component";
import {PostsListComponent} from "./posts/posts-list/posts-list.component";
import {ChangePostComponent} from "./posts/change-post/change-post.component";
import {AddPostComponent} from "./posts/add-post/add-post.component";
import {SlidersListComponent} from "./slider/sliders-list/sliders-list.component";
import {ChangeSliderComponent} from "./slider/change-slider/change-slider.component";
import {AddSliderComponent} from "./slider/add-slider/add-slider.component";
import {MediasListComponent} from "./media/medias-list/medias-list.component";
import {ChangeMediaComponent} from "./media/change-media/change-media.component";
import {AddMediaComponent} from "./media/add-media/add-media.component";

const routes: Routes = [
  {path: 'content', component: ContentComponent, children: [
      {path: 'posts', component: PostsListComponent},
      {path: 'changePost', component: ChangePostComponent},
      {path: 'addPost', component: AddPostComponent},
      {path: 'sliders', component: SlidersListComponent},
      {path: 'changeSlider', component: ChangeSliderComponent},
      {path: 'addSlider', component: AddSliderComponent},
      {path: 'medias', component: MediasListComponent},
      {path: 'changeMedia', component: ChangeMediaComponent},
      {path: 'addMedia', component: AddMediaComponent},
      {path: 'block', component: TestUserDataComponent},
      {path: 'menu', component: TestUserDataComponent},
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
