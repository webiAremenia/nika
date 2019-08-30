import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {WorkComponent} from './work/work.component';

console.log('home routing module');

const CHILDREN: Routes = [
    {path: '', component: WorkComponent}
];

const ROUTES: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'project', component: HomeComponent, children: CHILDREN},
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
