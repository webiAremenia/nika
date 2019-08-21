import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MenuRoutingModule} from './menu-routing.module';
import {MenuAddComponent} from './menu-add/menu-add.component';
import {MenuChangeComponent} from './menu-change/menu-change.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {SortablejsModule} from 'angular-sortablejs';


@NgModule({
    declarations: [
        MenuAddComponent,
        MenuChangeComponent,
        MenuListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        MenuRoutingModule,
        SortablejsModule

    ],
})
export class MenuModule {
}
