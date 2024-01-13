import { Component, Input, OnInit } from '@angular/core';
import { Entity } from 'src/app/auth/model/entity';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { StorageService } from 'src/app/auth/service/storage.service';
import { formatStringList } from 'src/app/helpers/formatStringList';

@Component({
  selector: 'internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.scss'],
})
export class InternshipCard implements OnInit {
  @Input() internship: InternshipModel;

  constructor(private readonly storageService: StorageService) {}

  ngOnInit(): void {}

  formatInternshipTechnologies(technologies: Entity[]): string {
    return formatStringList(technologies.map((technology) => technology.name));
  }

  deleteInternship(): void {
    this.storageService.deleteInternship(this.internship.id);
  }
}
