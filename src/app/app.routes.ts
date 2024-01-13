import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact-us', component: ContactUsComponent }
];
