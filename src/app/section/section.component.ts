import { Component, Input, OnInit } from '@angular/core';
import { Section } from '../models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.sass'],
})
export class SectionComponent implements OnInit {
  @Input()
  section!: Section;
  @Input()
  selectedSection!: number;

  ngOnInit(): void {}
}
