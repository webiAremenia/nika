import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewBusinessComponent} from './new-business/new-business.component';
import {SpeakingOpportunityComponent} from './speaking-opportunity/speaking-opportunity.component';
import {ContactComponent} from './contact.component';
import {ContactCareersComponent} from './contact-careers/contact-careers.component';

const routes: Routes = [
    {
        path: '', component: ContactComponent, children: [
            {path: '', redirectTo: 'business', pathMatch: 'full'},
            {path: 'business', component: NewBusinessComponent},
            {path: 'opportunity', component: SpeakingOpportunityComponent},
            {path: 'careers', component: ContactCareersComponent},
            {path: '**', redirectTo: 'business', pathMatch: 'full'}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactRoutingModule {
}
