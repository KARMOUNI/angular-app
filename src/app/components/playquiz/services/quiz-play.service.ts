import { Injectable } from '@angular/core';
import {QuestionPlayInterface} from "../interfaces/question-play.interface";
@Injectable({
    providedIn: 'root'
})
export class QuizPlayService {
    // Exemple de questions avec choix et réponse correcte
    private questions = [
        { id: 1, questionText: "Qu'est-ce qu'une classe en Java ?", options: ["Type de données", "Méthode", "Structure"], correctAnswer: "Type de données" },
        { id: 2, questionText: "La méthode utilisée pour comparer deux chaînes en Java ?", options: ["equals()", "compare()", "compareTo()"], correctAnswer: "equals()" },
        { id: 3, questionText: "Mot-clé pour créer une instance de classe ?", options: ["new", "class", "create"], correctAnswer: "new" },
    ];

    getQuestions() {
        return this.questions;
    }

    calculateScore(userAnswers: { [key: string]: string }, questionsForQuiz: QuestionPlayInterface[] ): number {
        let score = 0;

        questionsForQuiz.forEach((question, index) => {
            const userAnswer = userAnswers[`question_${index}`];
            if (question.correctAnswer === userAnswer) {
                score += 1;
            }
        });

        return score;
    }
}
