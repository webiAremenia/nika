import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkListComponent} from './work-list/work-list.component';
import {EditWorkComponent} from './edit-work/edit-work.component';


const routes: Routes = [
    {path: '', component: WorkListComponent},
    {path: 'editWork', component: EditWorkComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorkRoutingModule {
}
