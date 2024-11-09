import { Component, OnInit } from '@angular/core';
import { QuizPlayService } from "../services/quiz-play.service";
import { QuizService } from "../../../services/quiz.service";
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-quiz-play',
  templateUrl: './quiz-play.component.html',
  styleUrls: ['./quiz-play.component.css']  // Fixed typo here
})

export class QuizPlayComponent implements OnInit {

  quizForm: FormGroup;
  questions: { questionText: string; options: string[]; correctAnswer: string }[] = []; // Add typing for questions
  score: number | null = null;
  quiz: any | null = null;

  constructor(
      private fb: FormBuilder,
      private route: ActivatedRoute,
      private quizServicePlay: QuizPlayService,
      private quizService: QuizService
  ) {
    this.quizForm = this.fb.group({});

  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadQuestions(id);
  }

  loadQuestions(id: number) {
    this.quizService.getQuizById(id).subscribe(
        (data) => {
          this.questions = data.questions;
          this.initializeFormControls(); // Initialize form controls only after questions are loaded
        },
        (error) => {
          console.error('Error fetching quiz:', error);
        }
    );
  }

  initializeFormControls() {
    this.questions.forEach((_, index) => {
      const controlName = `question_${index}`; // Unique control name for each question
      this.quizForm.addControl(controlName, this.fb.control(''));
    });
  }

  onSubmit() {
    const userAnswers = this.quizForm.value;
    this.score = this.quizServicePlay.calculateScore(userAnswers, this.questions);
  }
}
