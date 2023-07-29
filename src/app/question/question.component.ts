import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Question } from '../models/questions.model';
import { QuestionChanged } from '../models/questionChanged.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass'],
})
export class QuestionComponent implements OnInit {
  @Input()
  question!: Question;
  @Input()
  sectionNumber!: string;
  @Input()
  indexQuestion!: number;

  @Output('questionChanged')
  questionEmitter = new EventEmitter<QuestionChanged>();

  ngOnInit(): void {
    //console.log(this.question);
  }

  getValueFromSelect(event: string) {
    console.log(event);
  }

  answerQuestion(answer: string) {
    let isCorrect = answer === this.question.response;

    this.questionEmitter.emit({
      question: this.question,
      isCorrect: isCorrect,
      sectionIndex: +this.sectionNumber - 1,
      response: answer,
    });
  }
}
