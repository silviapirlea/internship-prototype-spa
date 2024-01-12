import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/auth/service/storage.service';

@Component({
  selector: 'internships-list',
  templateUrl: './internships-list.component.html',
  styleUrls: ['./internships-list.component.scss'],
})
export class InternshipsList implements OnInit {
  constructor(private readonly storageService: StorageService) {}

  ngOnInit(): void {
    console.log(this.storageService.getInternships());
  }
}
