import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BlockRoutingModule} from './block-routing.module';
import {BlockListComponent} from './block-list/block-list.component';
import {BlockPreviewComponent} from './block-preview/block-preview.component';
import {ChangeBlockComponent} from './change-block/change-block.component';
import {AddBlockComponent} from './add-block/add-block.component';
import {NgMultiSelectDropDownModule} from 'ng-multiselect-dropdown';
import {ColorPickerModule} from 'ngx-color-picker';


@NgModule({
    declarations: [
        BlockListComponent,
        BlockPreviewComponent,
        ChangeBlockComponent,
        AddBlockComponent
    ],
    imports: [
        ColorPickerModule,
        NgMultiSelectDropDownModule.forRoot(),
        CommonModule,
        FormsModule,
        ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
        BlockRoutingModule,
        NgZorroAntdModule,
    ],
})
export class BlockModule {
}
