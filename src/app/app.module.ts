import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './core/landing/landing.component';
import { HeaderComponent } from './core/header/header.component';
import { SignInComponent } from './core/auth/sign-in/sign-in.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreComponent } from './core/core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { BookItemComponent } from './dashboard/book-item/book-item.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { AddBookComponent } from './dashboard/add-book/add-book.component';
import { BooksCollectionComponent } from './dashboard/books-collection/books-collection.component';
import { DataStorageService } from './shared/data-storage.service';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SpinnerService } from './shared/spinner.service';
import { AuthService } from './shared/auth.service';
import { UserDataStorageService } from './shared/user-data-storage.service';
import { ErrorPopupComponent } from './shared/error-popup/error-popup.component';
import { ErrorService } from './shared/error.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    CoreComponent,
    DashboardComponent,
    HomeComponent,
    BookItemComponent,
    MenuComponent,
    AddBookComponent,
    BooksCollectionComponent,
    SpinnerComponent,
    ErrorPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DataStorageService,
    SpinnerService,
    AuthService,
    UserDataStorageService,
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
