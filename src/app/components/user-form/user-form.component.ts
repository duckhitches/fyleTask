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
  showMessage: boolean = false;

  constructor(private userDataService: UserDataService) {}

  addWorkout() {
    if (this.userName && this.workoutType && this.workoutMinutes > 0) {
      const newUser = {
        id: Date.now(),
        name: this.userName,
        workouts: [{ type: this.workoutType, minutes: this.workoutMinutes }]
      };
      this.userDataService.addUser(newUser);

      //For Popup message and resetting form fields
      this.showMessage = true;

  
      setTimeout(() => {
        this.showMessage = false;
      }, 3000);

    
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
    }
  }
}
