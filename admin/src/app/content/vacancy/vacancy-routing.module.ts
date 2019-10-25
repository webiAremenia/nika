import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {AddVacancyComponent} from './add-vacancy/add-vacancy.component';
import {ChangeVacancyComponent} from './change-vacancy/change-vacancy.component';


const routes: Routes = [
    {path: '', component: VacancyListComponent},
    {path: 'changeVacancy', component: ChangeVacancyComponent},
    {path: 'addVacancy', component: AddVacancyComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VacancyRoutingModule {
}
