import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DependentQuestion, Question } from '../models/questions.model';
import { QuestionChanged } from '../models/questionChanged.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass'],
})
export class QuestionComponent implements OnInit {
  @Input()
  question!: Question | DependentQuestion;
  @Input()
  sectionNumber!: string;
  @Input()
  indexQuestion!: number;
  @Input()
  completeQuestion!: Question;
  @Input()
  fatherQuestionNumber = 0;

  isQuestion = true;
  showDependentQuestion = false;

  @Output('questionChanged')
  questionEmitter = new EventEmitter<QuestionChanged>();

  ngOnInit(): void {
    this.isQuestion = 'choiceOptions' in this.question;
    if ('choiceOptions' in this.question) {
      this.completeQuestion = this.question;
    } else {
      console.log(this.fatherQuestionNumber);
    }
  }

  answerQuestion(answer: string) {
    let isCorrect = false;
    if ('response' in this.question) {
      let isCorrect = answer === this.question.response;
    }

    if (
      this.question.hasDependentQuestion &&
      answer === this.question.responseToDisplayDependentQuestionList
    ) {
      this.showDependentQuestion = true;
    } else {
      this.showDependentQuestion = false;
    }

    this.questionEmitter.emit({
      question: this.question,
      isCorrect: isCorrect,
      sectionIndex: +this.sectionNumber - 1,
      response: answer,
    });
  }
}
