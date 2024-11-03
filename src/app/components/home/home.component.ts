import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  startSession(): void {
    // Naviguer vers le composant quiz ou page de choix de quiz
    this.router.navigate(['/quiz']);
  }
}