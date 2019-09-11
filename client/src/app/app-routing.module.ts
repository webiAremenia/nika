import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './components/pages/about/about.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/pages/home/home.module')
            .then(m => m.HomeModule).catch(e => e)
    },
    {
        path: 'contact',
        loadChildren: () => import('./components/pages/contact/contact.module')
            .then(m => m.ContactModule).catch(e => e)
    },
    {path: 'about', component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
