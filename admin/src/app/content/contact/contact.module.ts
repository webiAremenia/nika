import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {EditContactComponent} from './edit-contact/edit-contact.component';
import {ContactRoutingModule} from './contact-routing.module';


@NgModule({
    declarations: [
        EditContactComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        ContactRoutingModule
    ],
})
export class ContactModule {
}
