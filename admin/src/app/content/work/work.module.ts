import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {WorkRoutingModule} from './work-routing.module';
import {WorkListComponent} from './work-list/work-list.component';
import {EditWorkComponent} from './edit-work/edit-work.component';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {SortablejsModule} from 'angular-sortablejs';
import {ColorPickerModule} from 'ngx-color-picker';


@NgModule({
    declarations: [
        WorkListComponent,
        EditWorkComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        WorkRoutingModule,
        NzUploadModule,
        SortablejsModule,
        ColorPickerModule

    ],
})
export class WorkModule {
}
