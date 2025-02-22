import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProblemViewerComponent } from './problem-viewer/problem-viewer.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'problem/:problemId', component: ProblemViewerComponent}
];
