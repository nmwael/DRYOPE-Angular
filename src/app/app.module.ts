import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroListComponent} from '../hero/hero-list.component';
import {TimeComponent} from '../time/time.component';
import {routing} from './app.routing';
import {AnimationComponent} from '../animation/animation.component';
import { ShakeComponent } from '../shake/shake.component';
import {AnimationTargetComponent} from "../animation-target/animation-target.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    TimeComponent,
    AnimationComponent,
    ShakeComponent,
    AnimationTargetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
