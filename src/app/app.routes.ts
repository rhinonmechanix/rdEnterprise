import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

// export const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'about', component: AboutComponent },
//   { path: 'contact-us', component: ContactUsComponent },
//   { path: 'services', component: ServicesComponent },
// ];

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainComponent },
  { path: 'futureInterio', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];
