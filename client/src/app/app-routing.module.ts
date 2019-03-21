import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./components/pages/home/home.component";
import {ContactComponent} from "./components/pages/contact/contact.component";
import {AboutComponent} from "./components/pages/about/about.component";
import {WorkComponent} from "./components/pages/work/work.component";
import {StoriesComponent} from "./components/pages/stories/stories.component";
import {CareersComponent} from "./components/pages/careers/careers.component";

const child: Routes = [
];
const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: 'work', component: WorkComponent},
  {path: 'all-stories', component: StoriesComponent},
  {path: 'stories/:id', component: StoriesComponent, children: child},
  {path: 'careers', component: CareersComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
