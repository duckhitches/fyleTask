export interface Workout {
  type: string;
  minutes: number;
}

export interface User {
  name: string;
  workouts: Workout[];
}
