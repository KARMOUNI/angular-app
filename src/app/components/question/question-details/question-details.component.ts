import { Component } from '@angular/core';
import {QuestionService} from "../../../services/question.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrl: './question-details.component.css'
})
export class QuestionDetailsComponent {
  question: any | null = null;

  constructor(private route: ActivatedRoute, private questionService: QuestionService) {}

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.loadQuestion(id);
  }

  loadQuestion(id: number) {
    // Use the service to load the question
    this.questionService.getQuestionById(id).subscribe(
        (data) => {
          this.question = data;
        },
        (error) => {
          console.error('Error fetching question:', error);
        }
    );
    /*this.questionService.getQuestionById(id).subscribe({
      next: (data) => {
        this.QuestionsList = data;
        console.log(this.QuestionsList); // Handle the data as needed
      },
      error: (err) => {
        console.error('Error fetching question:', err);
      }
    });*/
  }
}
