import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {GroupRoutingModule} from './group-routing.module';
import {AddGroupComponent} from './add-group/add-group.component';


@NgModule({
    declarations: [
        AddGroupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        GroupRoutingModule,
        NgZorroAntdModule,
    ],
})
export class GroupModule {
}
