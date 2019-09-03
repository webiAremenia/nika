import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IntroduceComponent} from './introduce/introduce.component';
import {OurElementComponent} from './our-element/our-element.component';
import {OurClientsComponent} from './our-clients/our-clients.component';
import {RemarkComponent} from './remark/remark.component';
import {LeadershipComponent} from './leadership/leadership.component';
import {OurAwardsComponent} from './our-awards/our-awards.component';

@NgModule({
    declarations: [
        IntroduceComponent,
        OurElementComponent,
        OurClientsComponent,
        RemarkComponent,
        LeadershipComponent,
        OurAwardsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        IntroduceComponent,
        OurElementComponent,
        OurClientsComponent,
        RemarkComponent,
        LeadershipComponent,
        OurAwardsComponent
    ]
})
export class AboutModule {
}
