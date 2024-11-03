import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrl: './question-list.component.css'
})
export class QuestionListComponent implements OnInit{
  QuestionsList: any[] = []; // Use the specific type for Questions

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.loadQuestion();
  }

  loadQuestion() {
    this.questionService.getAllQuestion().subscribe({
      next: (data) => {
        this.QuestionsList = data;
        console.log(this.QuestionsList); // Handle the data as needed
      },
      error: (err) => {
        console.error('Error fetching question:', err);
      }
    });
  }
}
