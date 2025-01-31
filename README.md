# WorkoutApp/Workout Tracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




## Code Coverage summary and report
Instead of 1 component, I have tested 3-components(user-form, workout-list, workout-chart) and 1-service(UserDataService) for my own satisfaction. Testing done with Karma offcourse by cmd "ng test --code-coverage".

Statements   : 95.6% ( 87/91 )
Branches     : 72.22% ( 13/18 )
Functions    : 96.87% ( 31/32 )
Lines        : 95.23% ( 80/84 )

## Code Coverage summary screenshot




## My assumptions (for github users)
Is that make sure the components imports are proper in app.module.ts, cause we might mistakenly add the standalone components in @NgModule, it can cause errors. To suppress unnecessary ts errors, you can check my tsconfig.json. If you are importing this project for playing around, dont make any change in tsconfig.json as I have already added enough warning suppressions. And also if you were to test appComponent, DO NOT MESS WITH TITLE or container or child module imports or html , It's a mess to solve. Or just import app-component, as soon as you create it.


## HOSTED  APPLICATION LINK OF VERCEL : [fyle-task](https://fyle-task-eshan-rust.vercel.app/)
