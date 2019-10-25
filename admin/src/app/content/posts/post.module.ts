import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PostRoutingModule} from './post-routing.module';
import {AddPostComponent} from './add-post/add-post.component';
import {ChangePostComponent} from './change-post/change-post.component';
import {PostPreviewComponent} from './post-preview/post-preview.component';
import {PostsListComponent} from './posts-list/posts-list.component';
import {EditorModule} from '@tinymce/tinymce-angular';


@NgModule({
    declarations: [
        AddPostComponent,
        ChangePostComponent,
        PostPreviewComponent,
        PostsListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PostRoutingModule,
        NgZorroAntdModule,
        EditorModule
    ],
})
export class PostModule {
}
