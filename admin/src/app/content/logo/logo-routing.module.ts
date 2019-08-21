import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LogoListComponent} from './logo-list/logo-list.component';
import {ChangeLogoComponent} from './change-logo/change-logo.component';
import {AddLogoComponent} from './add-logo/add-logo.component';


const routes: Routes = [
    {path: '', component: LogoListComponent},
    {path: 'changeLogo', component: ChangeLogoComponent},
    {path: 'addLogo', component: AddLogoComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LogoRoutingModule {
}
