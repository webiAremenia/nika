import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/pages/about/about.component';
import {SidebarComponent} from './components/partials/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FooterComponent} from './components/partials/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './_modules/shared.module';
import {AboutModule} from './components/pages/about/about.module';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        SidebarComponent,
        FooterComponent,
    ],
    imports: [
        SharedModule,
        AboutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
