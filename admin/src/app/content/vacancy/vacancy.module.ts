import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AddVacancyComponent} from './add-vacancy/add-vacancy.component';
import {ChangeVacancyComponent} from './change-vacancy/change-vacancy.component';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {VacancyRoutingModule} from './vacancy-routing.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
    declarations: [
        AddVacancyComponent,
        ChangeVacancyComponent,
        VacancyListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        VacancyRoutingModule,
        NgZorroAntdModule,
    ],
})
export class VacancyModule {
}
