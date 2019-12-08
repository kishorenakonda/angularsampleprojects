import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutes } from './app.constants';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(AppRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
