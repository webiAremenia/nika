import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {PortfolioRoutingModule} from './portfolio-routing.module';
import {AddPortfolioComponent} from './add-portfolio/add-portfolio.component';
import {ChangePortfolioComponent} from './change-portfolio/change-portfolio.component';
import {PortfolioListComponent} from './portfolio-list/portfolio-list.component';
import {PortfolioPreviewComponent} from './portfolio-preview/portfolio-preview.component';
import {EditorModule} from '@tinymce/tinymce-angular';


@NgModule({
    declarations: [
        AddPortfolioComponent,
        ChangePortfolioComponent,
        PortfolioListComponent,
        PortfolioPreviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule,
        PortfolioRoutingModule,
        EditorModule,
    ],
})
export class PortfolioModule {
}
