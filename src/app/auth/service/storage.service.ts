import {Injectable} from '@angular/core';
import {UserModel} from "../model/user.model";
import {UserRoleEnum} from "../model/user-role.enum";
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { WorkTypeEnum } from 'src/app/auth/model/work-type.enum';

const INTERNSHIPS: InternshipModel[] = [
  {
    id: '3103102010310103',
    title: 'Software Engineer Internship',
    description: 'Internships One Description',
    duration: 6,
    endDate: '20/10/2020',
    location: 'Cluj-Napoca, Romania',
    position: 'Frontend Software Engineer Intern',
    salaryRange: '2000-2500',
    technologies: [
      { id: '1', name: 'React' },
      { id: '2', name: 'Node' },
      { id: '3', name: 'HTML' },
    ],
    workType: WorkTypeEnum.REMOTE,
  },
  {
    id: '3103102010350103',
    title: 'Software Engineer Internship',
    description: 'Internships Two Description',
    duration: 3,
    endDate: '20/10/2025',
    location: 'Bucuresti, Romania',
    position: 'Backend Software Engineer Intern',
    salaryRange: '2000-3000',
    technologies: [
      { id: '1', name: 'Node' },
      { id: '2', name: 'SQL' },
      { id: '3', name: 'Postman' },
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

  constructor() {}

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
    }
    // get the hardcoded ones if we do not have any, for testing purpose until add feature
    generatedInternships.push(...INTERNSHIPS);
    return generatedInternships;
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
