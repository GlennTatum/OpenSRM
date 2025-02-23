import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProblemViewerComponent } from './problem-viewer/problem-viewer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'profile', component: ProfileComponent},
    {path: 'login', component: LoginComponent},
    {path: 'problem/:topic/:problemId', component: ProblemViewerComponent},
    {path: 'dashboard', component: UserDashboardComponent},
];
