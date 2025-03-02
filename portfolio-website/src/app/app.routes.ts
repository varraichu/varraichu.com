import { Routes } from '@angular/router';
import { AboutMe } from '../pages/about-me/about.component';
import { Education } from '../pages/education/education.component';

export const routes: Routes = [
    {path: 'about', component: AboutMe,},
    {path: 'edu', component: Education,}
];
