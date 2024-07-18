import { Component, OnInit } from '@angular/core';
import { User, Workout } from './components/workout.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;
  selectedWorkoutType: string = '';
  searchUserName: string = '';
  rowsPerPage: number = 5;

  ngOnInit() {
    // Initialize with sample data or fetch data from a service
    this.users = [
      { name: 'John', workouts: [{ type: 'Running', minutes: 30 }, { type: 'Cycling', minutes: 20 }] },
      { name: 'Jane', workouts: [{ type: 'Yoga', minutes: 45 }, { type: 'Swimming', minutes: 35 }] },
      { name: 'Mike Johnson', workouts: [{ type: 'Yoga', minutes: 50 }, { type: 'Cycling', minutes: 40 }] },
      // Add more sample data as needed
    ];
    this.filteredUsers = [...this.users];
    this.paginate({ first: 0, rows: this.rowsPerPage });
  }

  addWorkout() {
    if (this.userName && this.workoutType && this.workoutMinutes !== null) {
      const user = this.users.find(u => u.name === this.userName);
      if (user) {
        user.workouts.push({ type: this.workoutType, minutes: this.workoutMinutes });
      } else {
        this.users.push({ name: this.userName, workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }] });
      }
      this.filterWorkouts();
    }
  }

  filterWorkouts() {
    this.filteredUsers = this.users.filter(user => {
      const matchesType = this.selectedWorkoutType ? user.workouts.some(workout => workout.type === this.selectedWorkoutType) : true;
      const matchesName = this.searchUserName ? user.name.toLowerCase().includes(this.searchUserName.toLowerCase()) : true;
      return matchesType && matchesName;
    });
    this.paginate({ first: 0, rows: this.rowsPerPage });
  }

  paginate(event: any) {
    const start = event.first;
    const end = start + event.rows;
    this.paginatedUsers = this.filteredUsers.slice(start, end);
  }

  getAllWorkouts(): Workout[] {
    return this.filteredUsers.flatMap(user => user.workouts);
  }
}
