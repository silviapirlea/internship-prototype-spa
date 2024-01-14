import {Component, OnInit} from '@angular/core';
import {InternshipModel} from 'src/app/auth/model/internship.model';
import {StorageService} from 'src/app/auth/service/storage.service';
import {StudentService} from "../service/student.service";
import {StudentProfileModel} from "../model/student-profile.model";
import {ApplicationModel} from "../../shared/model/application.model";
import {v4} from "uuid";
import {ApplicationStatusEnum} from "../../shared/model/application-status.enum";
import {ApplicationService} from "../service/application.service";

@Component({
  selector: 'app-student-search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  internships: InternshipModel[];
  searchQuery: string;

  constructor(private readonly storageService: StorageService,
              private readonly studentService: StudentService,
              private readonly applicationService: ApplicationService
  ) {}

  ngOnInit(): void {
    this.internships = this.storageService.getAllInternships();
  }

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

  onApply(internshipId: string): void {
    this.hasProfile()
      ? this.createApplication(internshipId)
      : alert('You do not have a profile created yet!');
  }

  private createApplication(internshipId: string) {
    const application: ApplicationModel = {
      id: v4().toString(),
      internshipId,
      studentId: this.studentProfile? this.studentProfile?.userId : '',
      status: ApplicationStatusEnum.PENDING
    }
    this.applicationService.createApplication(application);
    alert('Application made successfully!')
  }

  private hasProfile(): boolean {
    return !!this.studentProfile;
  }

  get studentProfile(): StudentProfileModel | undefined {
    return this.studentService.getProfile(this.storageService.getUser()?.id);
  }
}
