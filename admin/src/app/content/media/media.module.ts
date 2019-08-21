import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {MediaRoutingModule} from './media-routing.module';
import {AddMediaComponent} from './add-media/add-media.component';
import {ChangeMediaComponent} from './change-media/change-media.component';
import {MediasListComponent} from './medias-list/medias-list.component';


@NgModule({
    declarations: [
        AddMediaComponent,
        ChangeMediaComponent,
        MediasListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MediaRoutingModule,
        NgZorroAntdModule,
    ],
})
export class MediaModule {
}
