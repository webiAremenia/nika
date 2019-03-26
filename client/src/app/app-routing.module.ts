import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {AboutComponent} from './components/pages/about/about.component';
import {WorkComponent} from './components/pages/work/work.component';
import {StoriesComponent} from './components/pages/stories/stories.component';
import {CareersComponent} from './components/pages/careers/careers.component';
import {AboutDescComponent} from './components/pages/about/about-desc/about-desc.component';
import {AllBlocksComponent} from './components/partials/all-blocks/all-blocks.component';
import {WorkDetailComponent} from "./components/pages/work/work-detail/work-detail.component";

const child: Routes = [];
const routes: Routes = [
    {path: '', component: AllBlocksComponent, pathMatch: 'full'},
    {path: 'home', component: AllBlocksComponent},
    {path: 'contact', component: AllBlocksComponent},
    {path: 'about', component: AboutComponent},
    {path: 'works', component: WorkComponent},
    {path: 'work/:id', component: WorkDetailComponent},
    {path: 'all-stories', component: StoriesComponent},
    {path: 'stories', component: StoriesComponent, children: child},
    {path: 'careers', component: CareersComponent},

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
