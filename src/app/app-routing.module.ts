import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './core/landing/landing.component';
import { SignInComponent } from './core/auth/sign-in/sign-in.component';
import { SignUpComponent } from './core/auth/sign-up/sign-up.component';
import { CoreComponent } from './core/core.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const appRoutes: Routes = [
    {path: '', component: CoreComponent, children: [
        {path: '', component: LandingComponent},
        {path: 'signIn', component: SignInComponent},
        {path: 'signUp', component: SignUpComponent}
    ]},
    {path: 'dashboard', component: DashboardComponent}
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
