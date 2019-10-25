import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './components/pages/about/about.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: './components/pages/home/home.module#HomeModule'
    },
    {
        path: 'contact',
        loadChildren: './components/pages/contact/contact.module#ContactModule'
    },
    {path: 'about', component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
