import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroListComponent} from './hero/hero-list.component';
import {TimeComponent} from './time/time.component';
import {BootstrapComponent} from './bootstrap/bootstrap.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'heroes', component: HeroListComponent},
  {path: 'time', component: TimeComponent},
  {path: 'bootstrap', component: BootstrapComponent},
  // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
