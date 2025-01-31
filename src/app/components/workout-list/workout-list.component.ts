import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class WorkoutListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  filteredUsers: User[] = [];
  paginatedUsers: User[] = [];

  Math = Math; //defining math

  searchName: string = '';
  selectedWorkoutType: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalPages: number = 0;

  private userSubscription!: Subscription;

  constructor(private userDataService: UserDataService) {}

  ngOnInit() {
    this.userSubscription = this.userDataService.userData$.subscribe(users => {
      this.users = users;
      this.applyFiltersAndPagination();
    });
  }

  ngOnDestroy() {
    this.userSubscription?.unsubscribe();
  }

  applyFiltersAndPagination() {
    let filteredByName = this.searchName
      ? this.users.filter(user =>
          user.name.toLowerCase().includes(this.searchName.toLowerCase())
        )
      : this.users;

    let filteredByType = this.selectedWorkoutType
      ? filteredByName.filter(user =>
          user.workouts.some(workout => workout.type === this.selectedWorkoutType)
        )
      : filteredByName;

    this.filteredUsers = filteredByType;
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    
    this.paginateUsers();
  }

  paginateUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }

  onPageChange(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginateUsers();
    }
  }

  getPageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  calculateTotalMinutes(workouts: Workout[]): number {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }

  getWorkoutCount(user: User): number {
    return user.workouts.length;
  }
}
