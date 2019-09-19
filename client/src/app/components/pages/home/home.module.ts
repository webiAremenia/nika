import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../../_modules/shared.module';
import {HomeComponent} from './home.component';
import {WorkComponent} from './work/work.component';
import {HomeRoutingModule} from './home-routing.module';
import {WorkVideoComponent} from './work/work-video/work-video.component';
import {WorkTextComponent} from './work/work-text/work-text.component';
import {WorkImgComponent} from './work/work-img/work-img.component';
import {WorkSliderComponent} from './work/work-slider/work-slider.component';
import { WorkColumnsComponent } from './work/work-columns/work-columns.component';

@NgModule({
    declarations: [
        HomeComponent,
        WorkComponent,
        WorkVideoComponent,
        WorkTextComponent,
        WorkImgComponent,
        WorkSliderComponent,
        WorkColumnsComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule,
    ]
})

export class HomeModule {
}
