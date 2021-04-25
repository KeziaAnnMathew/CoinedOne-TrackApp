import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { SchedulesComponent } from './schedules/schedules.component';
import { RestrictionsComponent } from './restrictions/restrictions.component';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { BlockedAppsComponent } from './blocked-apps/blocked-apps.component';
import { LimitedAppssComponent } from './limited-appss/limited-appss.component';
import { SetLimitsComponent } from './set-limits/set-limits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SchedulesComponent,
    RestrictionsComponent,
    AddscheduleComponent,
    BlockedAppsComponent,
    LimitedAppssComponent,
    SetLimitsComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
