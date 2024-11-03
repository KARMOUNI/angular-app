import { Component } from '@angular/core';
import {QuizService} from "../../../services/quiz.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.css'
})
export class QuizDetailsComponent {
  quiz: any | null = null;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadQuiz(id);
  }

  loadQuiz(id: number) {
    // Use the service to load the quiz
    this.quizService.getQuizById(id).subscribe(
        (data) => {
          console.log(data);
          this.quiz = data;
        },
        (error) => {
          console.error('Error fetching quiz:', error);
        }
    );
    /*this.quizService.getQuizById(id).subscribe({
      next: (data) => {
        this.QuizsList = data;
        console.log(this.QuizsList); // Handle the data as needed
      },
      error: (err) => {
        console.error('Error fetching quiz:', err);
      }
    });*/
  }
}
