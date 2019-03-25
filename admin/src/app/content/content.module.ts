import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContentRoutingModule} from './content-routing.module';
import { TestUserDataComponent } from './test-user-data/test-user-data.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContentComponent} from "./content.component";
import { PostsListComponent } from './posts/posts-list/posts-list.component';
import { ChangePostComponent } from './posts/change-post/change-post.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { PostPreviewComponent } from './posts/post-preview/post-preview.component';

@NgModule({
  declarations: [
    TestUserDataComponent,
    ContentComponent,
    PostsListComponent,
    ChangePostComponent,
    AddPostComponent,
    PostPreviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    CKEditorModule
  ]
})
export class ContentModule { }
