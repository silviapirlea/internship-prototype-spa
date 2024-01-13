import { Component, OnInit } from '@angular/core';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { StorageService } from 'src/app/auth/service/storage.service';

@Component({
  selector: 'internships-list',
  templateUrl: './internships-list.component.html',
  styleUrls: ['./internships-list.component.scss'],
})
export class InternshipsList implements OnInit {
  internships: InternshipModel[];

  constructor(private readonly storageService: StorageService) {}

  ngOnInit(): void {
    this.internships = this.storageService.getInternships();
  }
}
