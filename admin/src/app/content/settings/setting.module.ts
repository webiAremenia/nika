import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SettingsListComponent} from './settings-list/settings-list.component';
import {SettingRoutingModule} from './setting-routing.module';


@NgModule({
    declarations: [
        SettingsListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        SettingRoutingModule
    ],
})
export class SettingModule {
}
