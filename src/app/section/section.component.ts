import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
})
export class SectionComponent implements OnInit, OnChanges {
  @Input()
  section!: Section;
  @Input()
  selectedSection!: number;

  ngOnInit(): void {
    console.log(this.section);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedSection);
  }
}
