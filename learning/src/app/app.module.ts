import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Route[] = [
  {
    path:'',
    redirectTo: '/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component: LoginComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
