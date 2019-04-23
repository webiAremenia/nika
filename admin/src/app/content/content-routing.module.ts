import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content.component';

const routes: Routes = [
    {
        path: '', component: ContentComponent, children: [
            {path: 'vacancy', loadChildren: './vacancy/vacancy.module#VacancyModule'},
            {path: 'slider', loadChildren: './slider/slider.module#SliderModule'},
            {path: 'settings', loadChildren: './settings/setting.module#SettingModule'},
            {path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule'},
            {path: 'menu', loadChildren: './menu/menu.module#MenuModule'},
            {path: 'media', loadChildren: './media/media.module#MediaModule'},
            {path: 'group', loadChildren: './group/group.module#GroupModule'},
            {path: 'block', loadChildren: './block/block.module#BlockModule'},
            {path: 'post', loadChildren: './posts/post.module#PostModule'},
            {path: '**', redirectTo: 'posts', pathMatch: 'full'}
        ]
    },
    {path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContentRoutingModule {
}
