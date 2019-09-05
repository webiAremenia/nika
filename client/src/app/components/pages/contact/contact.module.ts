import {NgModule} from '@angular/core';
import {ContactCareersComponent} from './contact-careers/contact-careers.component';
import {NewBusinessComponent} from './new-business/new-business.component';
import {SpeakingOpportunityComponent} from './speaking-opportunity/speaking-opportunity.component';
import {ContactRoutingModule} from './contact-routing.module';
import {ContactComponent} from './contact.component';
import {MaterialModule} from '../../../_modules/material.module';
import {SharedModule} from '../../../_modules/shared.module';

@NgModule({
    declarations: [
        ContactComponent,
        ContactCareersComponent,
        NewBusinessComponent,
        SpeakingOpportunityComponent
    ],
    imports: [
        SharedModule,
        MaterialModule,
        ContactRoutingModule
    ]
})

export class ContactModule {
}
