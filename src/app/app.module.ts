import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { LoginModule } from '@c8y/ngx-components/core/login/login.module'; 
// sadly we missed to export the login module. I will change that on an upcoming
// release. For now you need to import the whole CoreModule, but tree shaking of
// webpack should take care.
import { AppStateService, CoreModule, LoginService } from '@c8y/ngx-components';
import { AppLoginComponent } from './app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    AppStateService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
