import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { WorkoutListComponent } from './workout-list.component';
import { UserDataService } from '../shared-service/user-data.service';
import { of } from 'rxjs';

describe('WorkoutListComponent', () => {
  let component: WorkoutListComponent;
  let fixture: ComponentFixture<WorkoutListComponent>;
  let mockUserDataService: jasmine.SpyObj<UserDataService>;

  const mockUsers = [
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
        { type: 'Swimming', minutes: 60 }
      ]
    }
  ];

  beforeEach(async () => {
    mockUserDataService = jasmine.createSpyObj('UserDataService', [], {
      userData$: of(mockUsers)
    });

    await TestBed.configureTestingModule({
      imports: [FormsModule, WorkoutListComponent],
      providers: [
        { provide: UserDataService, useValue: mockUserDataService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WorkoutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter users by name', () => {
    component.searchName = 'John';
    component.applyFiltersAndPagination();

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('John Doe');
  });

  it('should filter users by workout type', () => {
    component.selectedWorkoutType = 'Swimming';
    component.applyFiltersAndPagination();

    expect(component.filteredUsers.length).toBe(1);
    expect(component.filteredUsers[0].name).toBe('Jane Smith');
  });

  it('should calculate total minutes correctly', () => {
    const workouts = [
      { type: 'Running', minutes: 30 },
      { type: 'Cycling', minutes: 45 }
    ];

    const totalMinutes = component.calculateTotalMinutes(workouts);
    expect(totalMinutes).toBe(75);
  });

  it('should paginate users correctly', () => {
    component.itemsPerPage = 1;
    component.applyFiltersAndPagination();

    expect(component.paginatedUsers.length).toBe(1);
    expect(component.totalPages).toBe(2);
  });
});
