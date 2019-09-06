import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../_modules/shared.module';
import {HomeComponent} from './home.component';
import {WorkComponent} from './work/work.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
    declarations: [
        HomeComponent,
        WorkComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
    ]
})

export class HomeModule {
}
