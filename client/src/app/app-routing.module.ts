import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WorkComponent} from './components/pages/work/work.component';
import {StoriesComponent} from './components/pages/stories/stories.component';
import {WorkDetailComponent} from './components/pages/work/work-detail/work-detail.component';
import {StoryDetailComponent} from './components/pages/stories/story-detail/story-detail.component';
import {ContactComponent} from './components/pages/contact/contact.component';
import {AboutComponent} from './components/pages/about/about.component';
import {CareersComponent} from './components/pages/careers/careers.component';

const child: Routes = [];

const routes: Routes = [
    // {path: '', redirectTo: 'home', },
    {path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule)},
    {path: 'contact', component: ContactComponent},
    {path: 'about', component: AboutComponent},
    {path: 'works', component: WorkComponent},
    {path: 'stories', component: StoriesComponent},
    {path: 'careers', component: CareersComponent},
    {path: 'work/:id', component: WorkDetailComponent},
    {path: 'all-stories', component: StoriesComponent},
    {path: 'story/:id', component: StoryDetailComponent},
    {path: '**', redirectTo: ''},

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
