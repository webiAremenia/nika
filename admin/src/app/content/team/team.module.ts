import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {TeamRoutingModule} from './team-routing.module';
import {EditTeamComponent} from './edit-team/edit-team.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';


@NgModule({
    declarations: [
        EditTeamComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        TeamRoutingModule,
        NzUploadModule,
        NzModalModule,
        NzInputModule

    ],
})
export class TeamModule {
}
