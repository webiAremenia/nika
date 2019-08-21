import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PageListComponent} from './page-list/page-list.component';
import {PageAddComponent} from './page-add/page-add.component';
import {PageChangeComponent} from './page-change/page-change.component';
import {PageRoutingModule} from './page-routing.module';
import {EditorModule} from '@tinymce/tinymce-angular';


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
        EditorModule
    ],
})
export class PageModule {
}
