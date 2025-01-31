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


## HOSTED  APPLICATION LINK OF VERCEL : https://fyle-task-eshan.vercel.app
