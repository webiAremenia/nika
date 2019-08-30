import {NgModule} from '@angular/core';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../../_modules/shared.module';
import { WorkComponent } from './work/work.component';

@NgModule({
    declarations: [
        HomeComponent,
        WorkComponent
    ],
    exports: [],
    imports: [
        SharedModule,
        HomeRoutingModule,
    ]
})

export class HomeModule {
}
