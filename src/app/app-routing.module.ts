import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './core/landing/landing.component';
import { SignInComponent } from './core/auth/sign-in/sign-in.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { CoreComponent } from './core/core.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AddBookComponent } from './dashboard/add-book/add-book.component';
import { BooksCollectionComponent } from './dashboard/books-collection/books-collection.component';

const appRoutes: Routes = [
    {path: '', component: CoreComponent, children: [
        {path: '', component: LandingComponent},
        {path: 'signIn', component: SignInComponent},
        {path: 'signUp', component: SignUpComponent}
    ]},
    {path: 'dashboard', component: DashboardComponent, children: [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: HomeComponent},
        {path: 'addBook', component: AddBookComponent},
        {path: 'collection', component: BooksCollectionComponent}
    ]}
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
