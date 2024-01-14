import { Injectable } from '@angular/core';
import {ApplicationModel} from "../../shared/model/application.model";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  readonly APPLICATIONS_KEY = 'applications';
  applications: ApplicationModel[] = []

  constructor() { }

  createApplication(application: ApplicationModel): void {
    const storedApplications = window.localStorage.getItem(this.APPLICATIONS_KEY);
    const newApplications: ApplicationModel[] = [];
    if(storedApplications) {
      newApplications.push(...JSON.parse(storedApplications))
    }
    newApplications.push(application);
    this.applications = newApplications;
    window.localStorage.setItem(this.APPLICATIONS_KEY, JSON.stringify(this.applications));
  }

  getApplicationsByStudentId(studentId: string): ApplicationModel[] {
    const storedApplications = window.localStorage.getItem(this.APPLICATIONS_KEY);
    let filteredApplications: ApplicationModel[] = [];
    if(storedApplications) {
      filteredApplications = JSON.parse(storedApplications).filter((app: ApplicationModel) => app.studentId === studentId)
    }
    return filteredApplications;
  }
}
