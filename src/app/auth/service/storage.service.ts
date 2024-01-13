import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { UserRoleEnum } from '../model/user-role.enum';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { WorkTypeEnum } from 'src/app/auth/model/work-type.enum';
import { InternshipService } from 'src/app/auth/service/internship.service';

const INTERNSHIPS: InternshipModel[] = [
  {
    id: '3103102010310103',
    title: 'Software Engineer Internship',
    description:
      'Sed eu est ac elit dignissim sollicitudin ut a quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat venenatis sapien, sed euismod urna varius euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tincidunt blandit ex, vel pretium lacus consectetur et.',
    duration: 6,
    endDate: '20/10/2020',
    location: 'Cluj-Napoca, Romania',
    position: 'Frontend Software Engineer Intern',
    salaryRange: '2000-2500',
    technologies: [
      { id: '1', name: 'React' },
      { id: '2', name: 'Node' },
      { id: '3', name: 'HTML' },
      { id: '4', name: 'CSS' },
      { id: '5', name: 'Redux' },
      { id: '6', name: 'Postman' },
      { id: '7', name: 'Material UI' },
      { id: '8', name: 'JS' },
      { id: '9', name: 'TS' },
    ],
    workType: WorkTypeEnum.REMOTE,
  },
  {
    id: '3103102010350103',
    title: 'Software Engineer Internship',
    description:
      'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque tincidunt facilisis ipsum, ut rutrum mi condimentum at. Quisque leo lectus, gravida eu quam at, gravida consequat felis. Ut convallis mauris non dui pellentesque sodales. Pellentesque a felis leo. Nam tristique vel nisi eget egestas. ',
    duration: 3,
    endDate: '20/10/2025',
    location: 'Bucuresti, Romania',
    position: 'Backend Software Engineer Intern',
    salaryRange: '2000-3000',
    technologies: [
      { id: '1', name: 'Node' },
      { id: '2', name: 'SQL' },
      { id: '3', name: 'Postman' },
      { id: '4', name: 'C#' },
      { id: '5', name: 'Firebase' },
      { id: '6', name: 'Express' },
    ],
    workType: WorkTypeEnum.ONSITE,
  },
];

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  readonly USER_KEY = 'auth-user';
  readonly ORGANIZATION_INTERNSHIPS_KEY = 'organization-internships';

  constructor(private readonly internshipService: InternshipService) {}

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: UserModel): void {
    window.sessionStorage.removeItem(this.USER_KEY);
    window.sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public getInternships(): InternshipModel[] {
    const storedInternships = window.sessionStorage.getItem(
      this.ORGANIZATION_INTERNSHIPS_KEY
    );
    let generatedInternships: InternshipModel[] = [];
    // get the internships if we have them stored
    if (storedInternships) {
      const parsedInternships = JSON.parse(
        storedInternships
      ) as InternshipModel[];
      generatedInternships.push(...parsedInternships);
      return generatedInternships;
    }
    generatedInternships.push(...INTERNSHIPS);
    return generatedInternships;
  }

  public createInternship(internship: InternshipModel): void {
    const storedInternships = window.sessionStorage.getItem(
      this.ORGANIZATION_INTERNSHIPS_KEY
    );
    let newStoredInternships: InternshipModel[] = [];
    if (!storedInternships) {
      newStoredInternships.push(...INTERNSHIPS);
    } else {
      newStoredInternships.push(...JSON.parse(storedInternships));
    }
    newStoredInternships.push(internship);
    window.sessionStorage.setItem(
      this.ORGANIZATION_INTERNSHIPS_KEY,
      JSON.stringify(newStoredInternships)
    );
    this.internshipService.updateInternships(newStoredInternships);
  }

  public deleteInternship(internshipId: string): void {
    const storedInternships = window.sessionStorage.getItem(
      this.ORGANIZATION_INTERNSHIPS_KEY
    );
    if (storedInternships) {
      const parsedInternships = JSON.parse(
        storedInternships
      ) as InternshipModel[];
      const newInternships = parsedInternships.filter(
        (internship) => internship.id !== internshipId
      );
      window.sessionStorage.setItem(
        this.ORGANIZATION_INTERNSHIPS_KEY,
        JSON.stringify(newInternships)
      );
      this.internshipService.updateInternships(newInternships);
    }
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    return !!user;
  }

  public isStudentUser(): boolean {
    const user = this.getUser();
    return user ? user.role === UserRoleEnum.STUDENT : false;
  }

  public isOrganisationUser(): boolean {
    const user = this.getUser();
    return user ? user.role === UserRoleEnum.ORGANISATION : false;
  }
}
