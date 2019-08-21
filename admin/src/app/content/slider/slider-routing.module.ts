import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SlidersListComponent} from './sliders-list/sliders-list.component';
import {ChangeSliderComponent} from './change-slider/change-slider.component';
import {AddSliderComponent} from './add-slider/add-slider.component';


const routes: Routes = [
    {path: '', component: SlidersListComponent},
    {path: 'changeSlider', component: ChangeSliderComponent},
    {path: 'addSlider', component: AddSliderComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SliderRoutingModule {
}
