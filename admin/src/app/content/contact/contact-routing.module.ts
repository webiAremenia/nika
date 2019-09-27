import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditContactComponent} from './edit-contact/edit-contact.component';



const routes: Routes = [
    {path: '', component: EditContactComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule {
}
