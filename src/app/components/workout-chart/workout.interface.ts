//to avoid error in workout-chart.component.ts
//the error will show regarding that the 'workout' is undefined type
export interface Workout {
  type: string;
  minutes: number;
}

export interface User {
  name: string;
  workouts: Workout[];
}
