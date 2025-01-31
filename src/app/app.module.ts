import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatorModule } from 'primeng/paginator';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
   
    WorkoutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WorkoutListComponent

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
