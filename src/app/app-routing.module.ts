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

const routes: Routes = [
  { path: '', component: HomeComponent },  // Page d'accueil par défaut
  { path: 'app/list/question', component: QuestionListComponent },  // List Of Question
  { path: 'app/list/question/:id', component: QuestionDetailsComponent },  // Get Detail Question With Id
  { path: 'app/update/question/:id', component: QuestionUpdateComponent },  // Set Question with ID
  { path: 'app/new/question', component: QuestionFormComponent },  // Add Question
  { path: 'app/list/quiz', component: QuizListComponent },  // Page d'accueil par défaut
  { path: 'app/list/quiz/:id', component: QuizDetailsComponent },  // Page d'accueil par défaut
  { path: 'app/new/quiz', component: QuizSubmitComponent },  // Page d'accueil par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
