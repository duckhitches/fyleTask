import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { UserDataService } from '../shared-service/user-data.service';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let mockUserDataService: jasmine.SpyObj<UserDataService>;

  beforeEach(async () => {
    // Create mock UserDataService
    mockUserDataService = jasmine.createSpyObj('UserDataService', ['addUser']);

    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [UserFormComponent],
      providers: [
        { provide: UserDataService, useValue: mockUserDataService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add workout with invalid input', () => {
    // Arrange
    component.userName = '';
    component.workoutType = '';
    component.workoutMinutes = 0;

    // Act
    component.addWorkout();

    // Assert
    expect(mockUserDataService.addUser).not.toHaveBeenCalled();
  });

  it('should add workout with valid input', () => {
    // Arrange
    component.userName = 'John Doe';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    // Act
    component.addWorkout();

    // Assert
    expect(mockUserDataService.addUser).toHaveBeenCalledWith(
      jasmine.objectContaining({
        name: 'John Doe',
        workouts: [{ type: 'Running', minutes: 30 }]
      })
    );
  });

  it('should reset form after adding workout', () => {
    // Arrange
    component.userName = 'John Doe';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    // Act
    component.addWorkout();

    // Assert
    expect(component.userName).toBe('');
    expect(component.workoutType).toBe('');
    expect(component.workoutMinutes).toBe(0);
  });

  it('should show and hide message', fakeAsync(() => {
    // Arrange
    component.userName = 'John Doe';
    component.workoutType = 'Running';
    component.workoutMinutes = 30;

    // Act
    component.addWorkout();

    // Assert
    expect(component.showMessage).toBe(true);

    // Simulate time passing
    tick(3000);

    // Assert message is hidden
    expect(component.showMessage).toBe(false);
  }));
});
