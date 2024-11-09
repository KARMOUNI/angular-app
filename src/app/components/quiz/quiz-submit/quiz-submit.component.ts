import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { QuizService } from '../../../services/quiz.service';
import {QuestionService} from "../../../services/question.service";

@Component({
  selector: 'app-quiz-submit',
  templateUrl: './quiz-submit.component.html',
  styleUrl: './quiz-submit.component.css'
})

export class QuizSubmitComponent implements OnInit {
  quizForm: FormGroup;
  availableQuestions: any[] = []; // List of questions fetched from DB
  selectedQuestions: any[] = []; // List of questions selected for the quiz

  constructor(
      private fb: FormBuilder,
      private quizService: QuizService,
      private questionService: QuestionService
  ) {
    this.quizForm = this.fb.group({
      quizName: ['', Validators.required],
      quizDescription: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadAvailableQuestions();
  }

  loadAvailableQuestions(): void {
    this.questionService.getAllQuestion().subscribe({
      next: (data) => {
        console.log('Available Questions:', data);
        this.availableQuestions = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des questions:', err);
      }
    });
  }

  onQuestionToggle(question: any, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      // Ensure only valid questions (not null) are added
      if (question) {
        this.selectedQuestions.push(question);
      }
    } else {
      this.selectedQuestions = this.selectedQuestions.filter(q => q && q !== question);
    }
    console.log('Updated selectedQuestions:', this.selectedQuestions);
  }

  onSubmit(): void {
    console.log('Selected Questions before Submit:', this.selectedQuestions);

    if (this.quizForm.valid && this.selectedQuestions.length > 0) {
      const quizData = {
        quizName: this.quizForm.value.quizName,
        quizDescription: this.quizForm.value.quizDescription,
        questions: this.selectedQuestions
      };
console.log(quizData);
      this.quizService.addQuiz(quizData).subscribe({
        next: (response) => {
          console.log('Quiz ajouté avec succès:', response);
          this.quizForm.reset();
          this.selectedQuestions = [];
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du quiz:', err);
        }
      });
    } else {
      console.log('Form invalid or no questions selected.');
    }
  }

}
