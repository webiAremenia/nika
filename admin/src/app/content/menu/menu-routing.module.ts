import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuListComponent} from './menu-list/menu-list.component';
import {MenuAddComponent} from './menu-add/menu-add.component';
import {MenuChangeComponent} from './menu-change/menu-change.component';




const routes: Routes = [
    {path: '', component: MenuListComponent},
    {path: 'addMenu', component: MenuAddComponent},
    {path: 'changeMenu', component: MenuChangeComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule {
}
