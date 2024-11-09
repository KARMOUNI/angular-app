import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
//Import All Component for Question
import {QuestionListComponent} from "./components/question/question-list/question-list.component";
import {QuestionFormComponent} from "./components/question/question-form/question-form.component";
import {QuestionUpdateComponent} from "./components/question/question-update/question-update.component";
import {QuestionDetailsComponent} from "./components/question/question-details/question-details.component";
//Import All Component for Quiz
import {QuizListComponent} from "./components/quiz/quiz-list/quiz-list.component";
import {QuizDetailsComponent} from "./components/quiz/quiz-details/quiz-details.component";
import {QuizSubmitComponent} from "./components/quiz/quiz-submit/quiz-submit.component";
import {LayoutComponent} from "./layout/layout.component";
import {QuizPlayHomeComponent} from "./components/playquiz/quiz-home/quiz-home.component";
import {QuizPlayComponent} from "./components/playquiz/quiz-play/quiz-play.component";

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent, // Base layout component
    children: [
      { path: 'list/question', component: QuestionListComponent },  // List Of Question
      { path: 'list/question/:id', component: QuestionDetailsComponent },  // Get Detail Question With Id
      { path: 'update/question/:id', component: QuestionUpdateComponent },  // Set Question with ID
      { path: 'new/question', component: QuestionFormComponent },  // Add Question
      { path: 'list/quiz', component: QuizListComponent },  // Page d'accueil par défaut
      { path: 'list/quiz/:id', component: QuizDetailsComponent },  // Page d'accueil par défaut
      { path: 'new/quiz', component: QuizSubmitComponent },  // Page d'accueil par défaut
      // Add other routes here
    ]
  },
  { path: '', component: HomeComponent },  // Page d'accueil par défaut
  { path: 'play/quiz/home', component: QuizPlayHomeComponent },  // Page d'accueil par défaut
  { path: 'play/quiz/:id', component: QuizPlayComponent },  // Page d'accueil par défaut

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
