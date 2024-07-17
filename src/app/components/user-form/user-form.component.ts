import { Component } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number = 0;

  addWorkout() {
    const newUser = {
      id: Date.now(),
      name: this.userName,
      workouts: [
        { type: this.workoutType, minutes: this.workoutMinutes }
      ]
    };
    let users = JSON.parse(localStorage.getItem('userData') || '[]');
    users.push(newUser);
    localStorage.setItem('userData', JSON.stringify(users));
  }
}
