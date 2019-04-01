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
import { SlidersListComponent } from './slider/sliders-list/sliders-list.component';
import { AddSliderComponent } from './slider/add-slider/add-slider.component';
import { ChangeSliderComponent } from './slider/change-slider/change-slider.component';
import { SliderPreviewComponent } from './slider/slider-preview/slider-preview.component';
import { ChangeMediaComponent } from './media/change-media/change-media.component';
import { AddMediaComponent } from './media/add-media/add-media.component';
import { MediasListComponent } from './media/medias-list/medias-list.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioPreviewComponent } from './portfolio/portfolio-preview/portfolio-preview.component';
import { AddPortfolioComponent } from './portfolio/add-portfolio/add-portfolio.component';
import { ChangePortfolioComponent } from './portfolio/change-portfolio/change-portfolio.component';
import { SettingsListComponent } from './settings/settings-list/settings-list.component';
import { MenuListComponent } from './menu/menu-list/menu-list.component';
import { MenuChangeComponent } from './menu/menu-change/menu-change.component';
import { MenuAddComponent } from './menu/menu-add/menu-add.component';
import {SortablejsModule} from "angular-sortablejs";

@NgModule({
  declarations: [
    TestUserDataComponent,
    ContentComponent,
    PostsListComponent,
    ChangePostComponent,
    AddPostComponent,
    PostPreviewComponent,
    SlidersListComponent,
    AddSliderComponent,
    ChangeSliderComponent,
    SliderPreviewComponent,
    ChangeMediaComponent,
    AddMediaComponent,
    MediasListComponent,
    PortfolioListComponent,
    PortfolioPreviewComponent,
    AddPortfolioComponent,
    ChangePortfolioComponent,
    SettingsListComponent,
    MenuListComponent,
    MenuChangeComponent,
    MenuAddComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    CKEditorModule,
    SortablejsModule
  ]
})
export class ContentModule { }
