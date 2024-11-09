# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

1. **Clone the repository**
   ```shell
   git clone https://github.com/KARMOUNI/angular-app.git
   ```
   Alternatively, you can download the project as a ZIP file and extract it.

2. **Docker & Docker Compose**
   The project uses Docker and Docker Compose to simplify the deployment and execution of services. This ensures a consistent and reproducible configuration of the application in containers.
   ```shell
   docker-compose up -d --build
   ```
   ## URL DOCKER
   https://medium.com/@alioune.kanoute/simplify-starting-your-angular-project-with-docker-and-docker-compose-ee6ee01d6ef4

3. .**Or Import Project**
  Open your favorite IDE (e.g Intellij IDEA, STS, VSCode) and import the project as a Maven project.

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

4. **Endpoints for Question and Quiz**

  ```
   { path: '', component: HomeComponent },  // Page d'accueil par défaut
   { path: 'list/question', component: QuestionListComponent },  // List Of Question
   { path: 'list/question/:id', component: QuestionDetailsComponent },  // Get Detail Question With Id
   { path: 'update/question/:id', component: QuestionUpdateComponent },  // Set Question with ID
   { path: 'new/question', component: QuestionFormComponent },  // Add Question
   { path: 'list/quiz', component: QuizListComponent },  // Page d'accueil Quiz
   { path: 'list/quiz/:id', component: QuizDetailsComponent },  // find quiz by id
   { path: 'new/quiz', component: QuizSubmitComponent },  // add quiz
   { path: 'play/quiz/home', component: QuizPlayHomeComponent },  // Home of quiz play
   { path: 'play/quiz/:id', component: QuizPlayComponent },  // play quiz by id
 ```

5. **Endpoints for Question and Quiz**
   In this folder  ```frontangular/capture ecran``` , you will find the screenshots of all the application pages, organized by section. Each screenshot is named according to the page it represents.  
   