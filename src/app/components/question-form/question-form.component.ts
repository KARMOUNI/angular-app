import { Component } from '@angular/core';
import {QuestionService} from "../../services/question.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private questionService: QuestionService) {
    this.myForm = this.fb.group({
      questionText: ['', Validators.required],
      options: [''],
      correctAnswer: ['', Validators.required],
      category: ['', Validators.required],
      level:  ['']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.questionService.addQuestion(this.myForm.value).subscribe(
          response => {
            console.log('Form Submitted:', this.myForm.value, response);
          },
          error => {
            console.log('Erreur d\'ajout de la question', error);
          }
      );
      // Call the service to handle the form data, e.g., send to backend
    } else {
      console.log('Form is invalid');
    }
  }
}
