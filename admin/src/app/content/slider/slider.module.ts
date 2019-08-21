import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SlidersListComponent} from './sliders-list/sliders-list.component';
import {SliderPreviewComponent} from './slider-preview/slider-preview.component';
import {AddSliderComponent} from './add-slider/add-slider.component';
import {ChangeSliderComponent} from './change-slider/change-slider.component';
import {SliderRoutingModule} from './slider-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
    declarations: [
        SlidersListComponent,
        SliderPreviewComponent,
        AddSliderComponent,
        ChangeSliderComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SliderRoutingModule,
        NgZorroAntdModule,

    ],
})
export class SliderModule {
}
