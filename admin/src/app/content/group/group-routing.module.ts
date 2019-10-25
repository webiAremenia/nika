import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddGroupComponent} from './add-group/add-group.component';




const routes: Routes = [
    {path: '', component: AddGroupComponent},

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroupRoutingModule {
}
