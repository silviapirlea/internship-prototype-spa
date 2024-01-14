import { Component, OnInit } from '@angular/core';
import {ApplicationService} from "../service/application.service";
import {ApplicationModel} from "../../shared/model/application.model";
import {StorageService} from "../../auth/service/storage.service";
import {InternshipModel} from "../../auth/model/internship.model";

@Component({
  selector: 'app-my-applications',
  templateUrl: './my-applications.component.html',
  styleUrls: ['./my-applications.component.scss']
})
export class MyApplicationsComponent implements OnInit {

  myApplications: ApplicationModel[] = [];
  internships: InternshipModel[] = [];

  constructor(private readonly applicationService: ApplicationService,
              private readonly storageService: StorageService) { }

  ngOnInit(): void {
    this.myApplications = this.applicationService.getApplicationsByStudentId(this.storageService.getUser()?.id);
    this.internships = this.storageService.getInternshipsByIdIn(this.internshipIds);
  }

  getStatusForInternshipApplication(internshipId: string) {
    return this.myApplications.find((app) => app.internshipId === internshipId)?.status
  }

  get internshipIds(): string[] {
    return this.myApplications.map((app) => app.internshipId);
  }

}
