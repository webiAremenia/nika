import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './components/pages/about/about.component';
import {SidebarComponent} from './components/partials/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SharedModule} from './_modules/shared.module';
import {AboutModule} from './components/pages/about/about.module';
import {HeaderInterceptor} from './header-interceptor';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        SidebarComponent,
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
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HeaderInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
