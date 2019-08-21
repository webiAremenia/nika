import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContentRoutingModule} from './content-routing.module';
import {TestUserDataComponent} from './test-user-data/test-user-data.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContentComponent} from './content.component';
import {SortablejsModule} from 'angular-sortablejs';

@NgModule({
    declarations: [
        TestUserDataComponent,
        ContentComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ContentRoutingModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        BrowserAnimationsModule,
        SortablejsModule
    ]
})
export class ContentModule {
}
