import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
//Import All Component for Question
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionDetailsComponent } from './components/question/question-details/question-details.component';
import { QuestionFormComponent } from './components/question/question-form/question-form.component';
import { QuestionUpdateComponent } from './components/question/question-update/question-update.component';
//Import All Component for Quiz
import { QuizListComponent } from './components/quiz/quiz-list/quiz-list.component';
import { QuizDetailsComponent } from './components/quiz/quiz-details/quiz-details.component';
import { QuizSubmitComponent } from './components/quiz/quiz-submit/quiz-submit.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import {QuizPlayHomeComponent} from "./components/playquiz/quiz-home/quiz-home.component";
import {QuizPlayComponent} from "./components/playquiz/quiz-play/quiz-play.component";
import {QuizPlayService} from "./components/playquiz/services/quiz-play.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionListComponent,
    QuestionDetailsComponent,
    QuestionFormComponent,
    QuestionUpdateComponent,
    QuizListComponent,
    QuizDetailsComponent,
    QuizSubmitComponent,
    LayoutComponent,
    QuizPlayHomeComponent,
    QuizPlayComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [QuizPlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
