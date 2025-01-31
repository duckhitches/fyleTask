import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { UserDataService } from '../shared-service/user-data.service';
import { Subscription } from 'rxjs';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html'
})
export class WorkoutChartComponent implements OnInit, OnDestroy {
  users: User[] = [];
  selectedUser: User | null = null;
  private userSubscription!: Subscription;
  private chart: Chart | null = null;

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userSubscription = this.userDataService.userData$.subscribe(users => {
      this.users = users;
      if (users.length > 0) {
        this.selectUser(users[0]); // Default to the first user
      }
    });
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
    if (this.chart) {
      this.chart.destroy(); //destroys the existing data to display a new chart on new data
    }
  }

  selectUser(user: User): void {
    this.selectedUser = user;
    this.updateChart(user);
  }

  updateChart(user: User): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    if (this.chart) {
      this.chart.destroy();
    }

    const labels = user.workouts.map(workout => workout.type);
    const data = user.workouts.map(workout => workout.minutes);

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Minutes',
            data: data,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
