import { Component, Input, OnInit } from '@angular/core';
import { Entity } from 'src/app/auth/model/entity';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { formatStringList } from 'src/app/helpers/formatStringList';

@Component({
  selector: 'internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.scss'],
})
export class InternshipCard implements OnInit {
  @Input() internship: InternshipModel;

  constructor() {}

  ngOnInit(): void {}

  formatInternshipTechnologies(technologies: Entity[]): string {
    return formatStringList(technologies.map((technology) => technology.name));
  }
}
