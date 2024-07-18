import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { AppComponent } from './app.component';


const routes: Routes = [

  { path: '', component: AppComponent },
  { path: 'chart', component: WorkoutChartComponent },
  { path: '**', redirectTo: '' }  //if any url is undefined it'll move to root url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
