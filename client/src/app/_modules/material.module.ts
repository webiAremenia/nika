import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    MatNativeDateModule
} from '@angular/material';

@NgModule({
    declarations: [],
    exports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
    ]
})
export class MaterialModule {
}
