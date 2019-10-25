import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PageListComponent} from './page-list/page-list.component';
import {PageChangeComponent} from './page-change/page-change.component';
import {PageAddComponent} from './page-add/page-add.component';


const routes: Routes = [
    {path: '', component: PageListComponent},
    {path: 'changePage', component: PageChangeComponent},
    {path: 'addPage', component: PageAddComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule {
}
