import { Component } from '@angular/core';
import { UserDataService } from '../shared-service/user-data.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: []
})
export class UserFormComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  constructor(private userDataService: UserDataService) {}

  addWorkout() {
    if (this.userName && this.workoutType && this.workoutMinutes > 0) {
      const newUser = {
        id: Date.now(),
        name: this.userName,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
      };
      this.userDataService.addUser(newUser);
    }
  }
}
