import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {ChangePortfolioComponent} from './change-portfolio/change-portfolio.component';
import {AddPortfolioComponent} from './add-portfolio/add-portfolio.component';


const routes: Routes = [
    {path: '', component: PortfolioListComponent},
    {path: 'changePortfolio', component: ChangePortfolioComponent},
    {path: 'addPortfolio', component: AddPortfolioComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortfolioRoutingModule {
}
