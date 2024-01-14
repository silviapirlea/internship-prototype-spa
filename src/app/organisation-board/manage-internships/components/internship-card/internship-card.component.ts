import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Entity } from 'src/app/auth/model/entity';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { UserRoleEnum } from 'src/app/auth/model/user-role.enum';
import { StorageService } from 'src/app/auth/service/storage.service';
import { formatStringList } from 'src/app/helpers/formatStringList';

@Component({
  selector: 'internship-card',
  templateUrl: './internship-card.component.html',
  styleUrls: ['./internship-card.component.scss'],
})
export class InternshipCard implements OnInit {
  @Input() internship: InternshipModel;
  @Input() onInternshipDelete: (internshipId: string) => void;
  @Input() viewOnly = false;
  @Output() applyEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(private readonly storageService: StorageService) {}

  ngOnInit(): void {}

  applyAlert(): void {
    this.applyEvent.emit(this.internship.id);
  }

  isCurrentUserStudent(): boolean {
    const role = this.storageService.getUser()['role'] as UserRoleEnum;
    return role === UserRoleEnum.STUDENT;
  }

  formatInternshipTechnologies(technologies: Entity[]): string {
    return formatStringList(technologies.map((technology) => technology.name));
  }

  deleteInternship(): void {
    this.onInternshipDelete(this.internship.id)
    this.storageService.deleteInternship(this.internship.id)
  }
}
