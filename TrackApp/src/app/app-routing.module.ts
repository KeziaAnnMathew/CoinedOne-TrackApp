import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddscheduleComponent } from './addschedule/addschedule.component';
import { BlockedAppsComponent } from './blocked-apps/blocked-apps.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LimitedAppssComponent } from './limited-appss/limited-appss.component';
import { RestrictionsComponent } from './restrictions/restrictions.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { SetLimitsComponent } from './set-limits/set-limits.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'schedules',component:SchedulesComponent},
  {path:'schedules/add',component:AddscheduleComponent},//editschedule
  {path:'restrictions',component:RestrictionsComponent},
  {path:'restrictions/blockedapps',component:BlockedAppsComponent},
  {path:'restrictions/limitedapps',component:LimitedAppssComponent},
  {path:'restrictions/limitedapps/setlimits/:id',component:SetLimitsComponent},//edit limits
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
