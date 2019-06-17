import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {PageListComponent} from './page-list/page-list.component';
import {PageAddComponent} from './page-add/page-add.component';
import {PageChangeComponent} from './page-change/page-change.component';
import {PageRoutingModule} from './page-routing.module';



@NgModule({
    declarations: [
        PageListComponent,
        PageAddComponent,
        PageChangeComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PageRoutingModule,
        NgZorroAntdModule,
        CKEditorModule,

    ],
})
export class PageModule { }
