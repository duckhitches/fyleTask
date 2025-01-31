import { TestBed } from '@angular/core/testing';
import { UserDataService } from './user-data.service';

describe('UserDataService', () => {
  let service: UserDataService;

  beforeEach(() => {
    // Clear localStorage before each test
    localStorage.clear();
    
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
    
    service = TestBed.inject(UserDataService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load initial user data', () => {
    const users = service.getUsers();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0].name).toBe('John Doe');
  });

  it('should add a new user', () => {
    const initialUserCount = service.getUsers().length;
    
    const newUser = {
      id: 4,
      name: 'Alex Wilson',
      workouts: [{ type: 'Running', minutes: 45 }]
    };

    service.addUser(newUser);

    const updatedUsers = service.getUsers();
    expect(updatedUsers.length).toBe(initialUserCount + 1);
    expect(updatedUsers[updatedUsers.length - 1].name).toBe('Alex Wilson');
  });

  it('should add workout to existing user', () => {
    const userName = 'John Doe';
    const newWorkout = { type: 'Swimming', minutes: 30 };

    service.addWorkoutToUser(userName, newWorkout);

    const users = service.getUsers();
    const updatedUser = users.find(u => u.name === userName);
    
    expect(updatedUser?.workouts.length).toBeGreaterThan(2);
    expect(updatedUser?.workouts).toContain(newWorkout);
  });

  it('should add workout to new user if user does not exist', () => {
    const userName = 'New User';
    const newWorkout = { type: 'Yoga', minutes: 60 };

    service.addWorkoutToUser(userName, newWorkout);

    const users = service.getUsers();
    const newUser = users.find(u => u.name === userName);
    
    expect(newUser).toBeTruthy();
    expect(newUser?.workouts[0]).toEqual(newWorkout);
  });

//   it('should save and retrieve data from localStorage', () => {
//     const initialUsers = service.getUsers();
    
//     // Verify localStorage is updated
//     const storedData = localStorage.getItem('userData');
//     expect(storedData).toBeTruthy();
    
//     const parsedData = JSON.parse(storedData || '[]');
//     expect(parsedData.length).toBe(initialUsers.length);
//   });

  it('should emit updated data via observable', (done) => {
    const newUser = {
      id: 5,
      name: 'Emma Brown',
      workouts: [{ type: 'Running', minutes: 40 }]
    };

    service.userData$.subscribe(users => {
      if (users.some(u => u.name === 'Emma Brown')) {
        expect(users.length).toBeGreaterThan(3);
        done();
      }
    });

    service.addUser(newUser);
  });
});
