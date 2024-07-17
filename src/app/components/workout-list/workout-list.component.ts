import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  paginatedUsers: any[] = [];
  selectedWorkoutType: string = '';
  rowsPerPage: number = 5;
  currentPage: number = 0;

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('userData') || '[]');
    this.filterWorkouts();
  }

  filterWorkouts() {
    if (this.selectedWorkoutType) {
      this.filteredUsers = this.users.map(user => {
        return {
          ...user,
          workouts: user.workouts.filter((workout: any) => workout.type === this.selectedWorkoutType)
        };
      }).filter(user => user.workouts.length > 0);
    } else {
      this.filteredUsers = [...this.users];
    }
    this.paginate({ first: 0, rows: this.rowsPerPage });
  }

  paginate(event: any) {
    this.currentPage = event.first / event.rows;
    this.paginatedUsers = this.filteredUsers.slice(event.first, event.first + event.rows);
  }
}
