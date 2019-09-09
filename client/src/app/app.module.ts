import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/pages/about/about.component';
import {SidebarComponent} from './components/partials/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {WorkComponent} from './components/pages/work/work.component';
import {StoriesComponent} from './components/pages/stories/stories.component';
import {CareersComponent} from './components/pages/careers/careers.component';
import {ImageBlockComponent} from './components/partials/block-types/image-block/image-block.component';
import {AllBlocksComponent} from './components/partials/all-blocks/all-blocks.component';
import {BlogBlockComponent} from './components/partials/block-types/blog-block/blog-block.component';
import {BgImageBlockComponent} from './components/partials/block-types/bg-image-block/bg-image-block.component';
import {VideoBlockComponent} from './components/partials/block-types/video-block/video-block.component';
import {AllStoriesComponent} from './components/pages/all-stories/all-stories.component';
import {HoverOpacityDirective} from './_directives/hover-opacity.directive';
import {HoverRotateDirective} from './_directives/hover-rotate.directive';
import {VacancyComponent} from './components/pages/vacancy/vacancy.component';
import {VacancyDescComponent} from './components/pages/vacancy/vacancy-desc/vacancy-desc.component';
import {Hover3dRotateDirective} from './_directives/hover-3d-rotate.directive';
import {FooterComponent} from './components/partials/footer/footer.component';
import {WorkDescComponent} from './components/pages/work/work-desc/work-desc.component';
import {StoriesDescComponent} from './components/pages/stories/stories-desc/stories-desc.component';
import {WorkDetailComponent} from './components/pages/work/work-detail/work-detail.component';
import {StoryDetailComponent} from './components/pages/stories/story-detail/story-detail.component';
import {HttpClientModule} from '@angular/common/http';
import {PortfolioBlockComponent} from './components/partials/block-types/portfolio-block/portfolio-block.component';
import {NgxTweetModule} from 'ngx-tweet';
import {TwitterBlockComponent} from './components/partials/block-types/twitter-block/twitter-block.component';
import {GifBlockComponent} from './components/partials/block-types/gif-block/gif-block.component';
import {SharedModule} from './_modules/shared.module';
import {AboutModule} from './components/pages/about/about.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        SidebarComponent,
        WorkComponent,
        StoriesComponent,
        CareersComponent,
        ImageBlockComponent,
        AllBlocksComponent,
        BlogBlockComponent,
        BgImageBlockComponent,
        VideoBlockComponent,
        AllStoriesComponent,
        HoverOpacityDirective,
        HoverRotateDirective,
        VacancyComponent,
        VacancyDescComponent,
        Hover3dRotateDirective,
        FooterComponent,
        WorkDescComponent,
        StoriesDescComponent,
        WorkDetailComponent,
        StoryDetailComponent,
        PortfolioBlockComponent,
        TwitterBlockComponent,
        GifBlockComponent,
    ],
    imports: [
        SharedModule,
        AboutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        NgxTweetModule
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
