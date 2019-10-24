import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {LogoListComponent} from './logo-list/logo-list.component';
import {ChangeLogoComponent} from './change-logo/change-logo.component';
import {AddLogoComponent} from './add-logo/add-logo.component';
import {LogoRoutingModule} from './logo-routing.module';
import {ColorPickerModule} from 'ngx-color-picker';


@NgModule({
    declarations: [
        LogoListComponent,
        AddLogoComponent,
        ChangeLogoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LogoRoutingModule,
        NgZorroAntdModule,
        ColorPickerModule

    ],
})
export class LogoModule {
}
