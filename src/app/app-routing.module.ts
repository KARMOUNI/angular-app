import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {QuestionListComponent} from "./components/question-list/question-list.component";
import {QuestionFormComponent} from "./components/question-form/question-form.component";
import {QuizListComponent} from "./components/quiz-list/quiz-list.component";
import {QuizDetailsComponent} from "./components/quiz-details/quiz-details.component";

const routes: Routes = [
  { path: '', component: HomeComponent },  // Page d'accueil par défaut
  { path: 'questionlist', component: QuestionListComponent },  // Page d'accueil par défaut
  { path: 'questionlist/new', component: QuestionFormComponent },  // Page d'accueil par défaut
  { path: 'quiz', component: QuizListComponent },  // Page d'accueil par défaut
  { path: 'quiz/:id', component: QuizDetailsComponent },  // Page d'accueil par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
