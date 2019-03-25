import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/content' , pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'content', canActivate: [AuthGuard], component: ContentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
