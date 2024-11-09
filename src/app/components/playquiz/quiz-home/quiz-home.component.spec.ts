import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPlayHomeComponent } from './quiz-home.component';

describe('QuizPlayHomeComponent', () => {
  let component: QuizPlayHomeComponent;
  let fixture: ComponentFixture<QuizPlayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPlayHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPlayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
