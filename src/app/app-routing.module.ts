import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [

  { path: 'home', component: BodyComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
