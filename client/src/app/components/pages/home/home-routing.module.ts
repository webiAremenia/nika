import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {WorkComponent} from './work/work.component';

const CHILDREN: Routes = [
    {path: 'project/:slug', component: WorkComponent}
];

const ROUTES: Routes = [
    {path: '', component: HomeComponent, children: CHILDREN},
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
