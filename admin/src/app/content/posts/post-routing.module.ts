import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostsListComponent} from "./posts-list/posts-list.component";
import {ChangePostComponent} from "./change-post/change-post.component";
import {AddPostComponent} from "./add-post/add-post.component";




const routes: Routes = [
    {path: '', component: PostsListComponent},
    {path: 'changePost', component: ChangePostComponent},
    {path: 'addPost', component: AddPostComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostRoutingModule {
}
