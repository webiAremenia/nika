import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewBusinessComponent} from './new-business/new-business.component';
import {SpeakingOpportunityComponent} from './speaking-opportunity/speaking-opportunity.component';
import {ContactComponent} from './contact.component';
import {ContactCareersComponent} from './contact-careers/contact-careers.component';

const routes: Routes = [
    {
        path: '', component: ContactComponent, children: [
            {path: '', redirectTo: 'new-business', pathMatch: 'full'},
            {path: 'new-business', component: NewBusinessComponent},
            {path: 'speaking-opportunity', component: SpeakingOpportunityComponent},
            {path: 'contact-careers', component: ContactCareersComponent},
            {path: '**', redirectTo: ''}
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactRoutingModule {
}
