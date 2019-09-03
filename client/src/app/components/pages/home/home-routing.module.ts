import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component';
import {WorkComponent} from './work/work.component';

console.log('home routing module');

const CHILDREN: Routes = [
    {path: 'project/:slug', component: WorkComponent}
];

const ROUTES: Routes = [
    {path: '', component: HomeComponent, children: CHILDREN},
    // {path: 'project/:slug', component: HomeComponent, children: CHILDREN},
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
