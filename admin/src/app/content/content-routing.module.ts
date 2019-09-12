import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentComponent} from './content.component';

const routes: Routes = [
    {
        path: '', component: ContentComponent, children: [
            // {path: 'vacancy', loadChildren: './vacancy/vacancy.module#VacancyModule'},
            // {path: 'slider', loadChildren: './slider/slider.module#SliderModule'},
            {path: 'logo', loadChildren: './logo/logo.module#LogoModule'},
            {path: 'settings', loadChildren: './settings/setting.module#SettingModule'},
            // {path: 'portfolio', loadChildren: './portfolio/portfolio.module#PortfolioModule'},
            {path: 'works', loadChildren: './work/work.module#WorkModule'},
            {path: 'team', loadChildren: './team/team.module#TeamModule'},
            {path: 'menu', loadChildren: './menu/menu.module#MenuModule'},
            {path: 'media', loadChildren: './media/media.module#MediaModule'},
            // {path: 'group', loadChildren: './group/group.module#GroupModule'},
            // {path: 'block', loadChildren: './block/block.module#BlockModule'},
            // {path: 'post', loadChildren: './posts/post.module#PostModule'},
            // {path: 'page', loadChildren: './pages/page.module#PageModule'},
            {path: 'profile', loadChildren: './profile-settings/profile.module#ProfileModule'},
            {path: '**', redirectTo: 'logo', pathMatch: 'full'}
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
