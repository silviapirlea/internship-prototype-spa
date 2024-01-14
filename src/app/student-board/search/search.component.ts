import { Component, OnInit } from '@angular/core';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { StorageService } from 'src/app/auth/service/storage.service';

@Component({
  selector: 'app-student-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  internships: InternshipModel[];
  searchQuery: string;

  onSearchQueryChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery = target.value;
    if (this.searchQuery.length === 0) {
      this.internships = this.storageService.getAllInternships();
    } else {
      const currentInternships = this.internships;
      const queryStringConverted = this.searchQuery.toLocaleLowerCase();
      this.internships = currentInternships.filter(
        (internship) =>
          internship.title.toLocaleLowerCase().includes(queryStringConverted) ||
          internship.position
            .toLocaleLowerCase()
            .includes(queryStringConverted) ||
          internship.location
            .toLocaleLowerCase()
            .includes(queryStringConverted) ||
          internship.workType
            .toString()
            .toLocaleLowerCase()
            .includes(queryStringConverted)
      );
    }
  }

  constructor(private readonly storageService: StorageService) {}

  ngOnInit(): void {
    this.internships = this.storageService.getAllInternships();
  }
}
