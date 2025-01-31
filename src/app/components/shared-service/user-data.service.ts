//using this as a common data sharing between other components for better data synchronization in those components.

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  id: number;
  name: string;
  workouts: Workout[];
}

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataKey = 'userData';
  private userData = new BehaviorSubject<User[]>(this.loadUserData());
  userData$ = this.userData.asObservable();

  private loadUserData(): User[] {
    const data = localStorage.getItem(this.userDataKey);
    return data ? JSON.parse(data) : [
        {
            id: 1,
            name: 'John Doe',
            workouts: [
              { type: 'Running', minutes: 30 },
              { type: 'Cycling', minutes: 45 }
            ]
          },
          {
            id: 2,
            name: 'Jane Smith',
            workouts: [
              { type: 'Swimming', minutes: 60 },
              { type: 'Running', minutes: 20 }
            ]
          },
          {
            id: 3,
            name: 'Mike Johnson',
            workouts: [
              { type: 'Yoga', minutes: 50 },
              { type: 'Cycling', minutes: 40 }
            ]
          },
     ]
  }

  private saveUserData(users: User[]): void {
    localStorage.setItem(this.userDataKey, JSON.stringify(users));
    this.userData.next(users);
  }

  getUsers(): User[] {
    return this.userData.getValue();
  }

  addUser(newUser: User): void {
    const users = this.getUsers();
    users.push(newUser);
    this.saveUserData(users);
  }
 
  //If you want you can add delete/update user

  addWorkoutToUser(userName: string, workout: Workout): void {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.name === userName);

    if (userIndex !== -1) {
      users[userIndex].workouts.push(workout);
    } else {
      users.push({
        id: Date.now(),
        name: userName,
        workouts: [workout]
      });
    }

    this.saveUserData(users);
  }
}
