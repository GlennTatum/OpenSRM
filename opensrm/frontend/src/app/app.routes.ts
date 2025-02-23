import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ProblemSetComponent } from './problem-set/problem-set.component';
export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: UserDashboardComponent},
    {path: 'set/:topic', component: ProblemSetComponent}
];
