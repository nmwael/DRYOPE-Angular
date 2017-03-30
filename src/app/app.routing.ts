import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroListComponent} from '../hero/hero-list.component';
import {TimeComponent} from '../time/time.component';
import {AnimationComponent} from '../animation/animation.component';
import {ShakeComponent} from '../shake/shake.component';

const appRoutes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'heroes', component: HeroListComponent},
  {path: 'time', component: TimeComponent},
  {path: 'animation', component: AnimationComponent},
  {path: 'shake', component: ShakeComponent},
  // { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
