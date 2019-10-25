import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    imports: [],
    exports: [
        CommonModule,
        CarouselModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule {
}
