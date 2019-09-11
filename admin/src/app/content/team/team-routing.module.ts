import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditTeamComponent} from './edit-team/edit-team.component';



const routes: Routes = [
    {path: '', component: EditTeamComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule {
}
