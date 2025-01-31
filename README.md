# WorkoutApp

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

## Screenshots

![Screenshot (215)](https://github.com/user-attachments/assets/66d2a406-1cbf-4208-a040-ba1b5f0126e2)
![Screenshot (214)](https://github.com/user-attachments/assets/1389e9ac-63da-4cf6-8f11-b96674ca65b2)


## Screenshot of component&service test using karma
I have created and used another folder called testingAngular for single component&service testing to avoid warnings.


![Screenshot (216)](https://github.com/user-attachments/assets/0624cc66-ed4f-4742-85b0-68252b64c7a4)


![Screenshot (217)](https://github.com/user-attachments/assets/b28ee582-8f9e-4ed2-9b10-24269a9d3e18)
![Screenshot (218)](https://github.com/user-attachments/assets/1d0e5376-e662-4714-82e6-e45acc7f0a30)
![Screenshot (219)](https://github.com/user-attachments/assets/cfe4726c-6792-460e-bd0c-699860b4fde7)
![Screenshot (220)](https://github.com/user-attachments/assets/6c836b9b-af5c-4fc6-861e-3d7bb457a66e)
![Screenshot (221)](https://github.com/user-attachments/assets/762b35d6-0c62-4a1f-a4ab-4cc995188b53)


## The Task Given: https://fyleuniverse.notion.site/Frontend-Development-Challenge-091d1fad48d94c6a9de0c02465cc640a#1b11c0778c7d4f8bb12dcdcecbea27b6


## Assumptions
Using lastest angular CLi doesnt include app.module.ts
SO install it by ng new testAng --no-standalone --routing --ssr=false  ref:stackoverflow
And to host angular application was messy in render,hostify and netlify.
I deployed recent react on netflify cause the process was easier there to deploy, but its not the same case with angular application. 
Hence I used vercel, but vercel doesnt read already predefined values which are already defined in app.component.ts.(THE JSON DATA PROVIDED BY FYLE)
When it comes to unit testing, Karma and jasmine works better with karma.conf.js with little modification (
coverageReporter: {
        dir: require('path').join(__dirname, './coverage/YOUR-PROJECT-NAME'), //MINE IS TESTINGANGULAR BECAUSE I TESTED THE COMPONENT AND SERVICE IN NEW ANGULAR FOLDER.NOT MY MAIN WORK-APP FOLDER.'';
        subdir: '.',
        reporters: [
          { type: 'html' },
          { type: 'text-summary' }
        ]
      })


## HOSTED  APPLICATION LINK OF VERCEL : [https://fyle-task-eshan.vercel.app](https://fyle-task-eshan-pxrcu5sm9-duckhitches-projects.vercel.app/)
