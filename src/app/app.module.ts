import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './core/landing/landing.component';
import { HeaderComponent } from './core/header/header.component';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreComponent } from './core/core.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    CoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
