import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MediasListComponent} from './medias-list/medias-list.component';
import {ChangeMediaComponent} from './change-media/change-media.component';
import {AddMediaComponent} from './add-media/add-media.component';




const routes: Routes = [
    {path: '', component: MediasListComponent},
    {path: 'changeMedia', component: ChangeMediaComponent},
    {path: 'addMedia', component: AddMediaComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MediaRoutingModule {
}
