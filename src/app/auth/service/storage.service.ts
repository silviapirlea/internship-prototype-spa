import { Injectable } from '@angular/core';
import { UserModel } from '../model/user.model';
import { UserRoleEnum } from '../model/user-role.enum';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { WorkTypeEnum } from 'src/app/auth/model/work-type.enum';
import { InternshipService } from 'src/app/auth/service/internship.service';
import { ORGANISATIONS } from 'src/app/auth/model/contants';
import { Entity } from 'src/app/auth/model/entity';

const INTERNSHIPS: InternshipModel[] = [
  {
    id: '3103102010310103',
    title: 'Software Engineer Internship',
    description:
      'Sed eu est ac elit dignissim sollicitudin ut a quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat venenatis sapien, sed euismod urna varius euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. In tincidunt blandit ex, vel pretium lacus consectetur et.',
    duration: 2,
    endDate: '20/03/2024',
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
    organisation: ORGANISATIONS[0],
  },
  {
    id: 'dapd1ppdp1p10e10e1',
    title: 'Software Internship',
    description:
      'Duis et interdum felis, a convallis ex. Donec semper sem quam, sit amet elementum est posuere nec. Donec accumsan nunc eu feugiat tempor. Nulla gravida libero nec sem pulvinar vehicula nec a justo. Nam malesuada quam sem, in mollis purus auctor vel. Proin viverra arcu magna, sit amet condimentum est tincidunt in. .',
    duration: 3,
    endDate: '10/04/2024',
    location: 'Iasi, Romania',
    position: 'Backend Software Engineer Intern',
    salaryRange: '9000-10000',
    technologies: [
      { id: '2', name: 'Node' },
      { id: '5', name: 'Redux' },
      { id: '6', name: 'Postman' },
      { id: '9', name: 'TS' },
    ],
    workType: WorkTypeEnum.HYBRID,
    organisation: ORGANISATIONS[0],
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
    organisation: ORGANISATIONS[1],
  },
  {
    id: '3103102010350103',
    title: 'Designer Internship',
    description:
      'Praesent iaculis a nunc in congue. Integer magna tellus, viverra a massa a, dictum interdum ligula. Phasellus eget erat tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur a ipsum ut justo maximus rutrum. Praesent porttitor tempor massa sit amet lacinia.',
    duration: 10,
    endDate: '10/11/2024',
    location: 'Bucuresti, Romania',
    position: 'Intern Designer',
    salaryRange: '1000-1500',
    technologies: [{ id: '1', name: 'Figma' }],
    workType: WorkTypeEnum.ONSITE,
    organisation: ORGANISATIONS[2],
  },
  {
    id: 'dkd1o1od12io1id1d10',
    title: 'Machine Learning Internship',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin maximus enim non urna maximus, pulvinar rutrum lectus porttitor. Proin dapibus leo at urna pretium, nec tincidunt mauris ornare. ',
    duration: 2,
    endDate: '10/03/2024',
    location: 'Bucuresti, Romania',
    position: 'Data Analyst Intern',
    salaryRange: '2000-2500',
    technologies: [
      {
        id: '1',
        name: 'Python',
      },
      {
        id: '2',
        name: 'OpenCV',
      },
    ],
    workType: WorkTypeEnum.HYBRID,
    organisation: ORGANISATIONS[2],
  },
  {
    id: 'kd1od1k111kdko1',
    title: 'Machine Learning Internship',
    description:
      'Vivamus in sapien placerat, congue nisl vel, facilisis risus. Maecenas porta, enim in venenatis blandit, metus sapien molestie enim, et congue neque orci sed odio. Sed semper ullamcorper ultricies. Nullam mollis rhoncus massa. Nunc quis nibh nisi. Curabitur eget hendrerit libero. Mauris ut eleifend nunc. Cras sed commodo nisi. In pretium sapien et pulvinar fermentum.',
    duration: 6,
    endDate: '10/07/2024',
    location: 'Buzau, Romania',
    position: 'Data Analyst Intern',
    salaryRange: '5000-6000',
    technologies: [
      {
        id: '1',
        name: 'Python',
      },
      {
        id: '2',
        name: 'OpenCV',
      },
      {
        id: '3',
        name: 'TS',
      },
    ],
    workType: WorkTypeEnum.REMOTE,
    organisation: ORGANISATIONS[3],
  },
  {
    id: 'd0919d1d91021d9109109d12',
    title: 'Frontend Software Engineer Internship',
    description:
      'Duis et interdum felis, a convallis ex. Donec semper sem quam, sit amet elementum est posuere nec. Donec accumsan nunc eu feugiat tempor. Nulla gravida libero nec sem pulvinar vehicula nec a justo. Nam malesuada quam sem, in mollis purus auctor vel. Proin viverra arcu magna, sit amet condimentum est tincidunt in.',
    duration: 2,
    endDate: '10/03/2024',
    location: 'Turda, Romania',
    position: 'Intern',
    salaryRange: '5000-6000',
    technologies: [
      {
        id: '1',
        name: 'JS',
      },
      {
        id: '2',
        name: 'TS',
      },
      {
        id: '3',
        name: 'React',
      },
      {
        id: '4',
        name: 'CSS',
      },
    ],
    workType: WorkTypeEnum.ONSITE,
    organisation: ORGANISATIONS[3],
  },
  {
    id: 'kf1kd1k0dk12010d1d1k02',
    title: 'Backend Learning Internship',
    description:
      'Nunc molestie ante eget leo fringilla tempus. Nulla arcu risus, dapibus posuere suscipit eu, tempor eget risus. Phasellus facilisis efficitur elit et accumsan.',
    duration: 3,
    endDate: '10/04/2024',
    location: 'Cluj-Napoca, Romania',
    position: 'Software Engineer Intern',
    salaryRange: '5500-6000',
    technologies: [
      {
        id: '1',
        name: 'Python',
      },
      {
        id: '2',
        name: 'OpenCV',
      },
      {
        id: '3',
        name: 'TS',
      },
    ],
    workType: WorkTypeEnum.HYBRID,
    organisation: ORGANISATIONS[4],
  },
  {
    id: 'od1o12d1d0o12d0o120do12o0do12',
    title: 'Fullstack Software Engineer Internship',
    description:
      'Vivamus in sapien placerat, congue nisl vel, facilisis risus. Maecenas porta, enim in venenatis blandit, metus sapien molestie enim, et congue neque orci sed odio. ',
    duration: 6,
    endDate: '10/07/2024',
    location: 'Bucuresti, Romania',
    position: 'Software Engineer Intern',
    salaryRange: '2500-4000',
    technologies: [
      {
        id: '1',
        name: 'JS',
      },
      {
        id: '2',
        name: 'TS',
      },
      {
        id: '3',
        name: 'React',
      },
      {
        id: '4',
        name: 'CSS',
      },
      {
        id: '5',
        name: 'JAVA',
      },
      {
        id: '6',
        name: 'Springboot',
      },
      {
        id: '7',
        name: 'CSS',
      },
    ],
    workType: WorkTypeEnum.REMOTE,
    organisation: ORGANISATIONS[4],
  },
];

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  readonly USER_KEY = 'auth-user';
  readonly ORGANIZATION_INTERNSHIPS_KEY = 'organization-internships';

  constructor(private readonly internshipService: InternshipService) {}

  public saveUser(user: UserModel): void {
    window.localStorage.removeItem(this.USER_KEY);
    window.localStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.localStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  private filterInternships = (
    internships: InternshipModel[],
    organisation: Entity
  ) => {
    const filteredInternships = internships.filter(
      (internship) =>
        Number(internship.organisation.id) === Number(organisation.id)
    );
    return filteredInternships;
  };

  public getAllInternships(): InternshipModel[] {
    const storedInternships = window.localStorage.getItem(
      this.ORGANIZATION_INTERNSHIPS_KEY
    );
    let generatedInternships: InternshipModel[] = [];
    // get the internships if we have them stored
    if (storedInternships) {
      const parsedInternships = JSON.parse(
        storedInternships
      ) as InternshipModel[];
      generatedInternships.push(...parsedInternships);
      console.log(generatedInternships);
      return generatedInternships;
    }
    generatedInternships.push(...INTERNSHIPS);
    return generatedInternships;
  }

  public getFilteredInternships(organisation: Entity): InternshipModel[] {
    const storedInternships = window.localStorage.getItem(
      `${this.ORGANIZATION_INTERNSHIPS_KEY}-${organisation.id}`
    );
    let generatedInternships: InternshipModel[] = [];
    // get the internships if we have them stored
    if (storedInternships) {
      const parsedInternships = JSON.parse(
        storedInternships
      ) as InternshipModel[];
      generatedInternships.push(
        ...this.filterInternships(parsedInternships, organisation)
      );
      return generatedInternships;
    }
    generatedInternships.push(
      ...this.filterInternships(INTERNSHIPS, organisation)
    );
    window.localStorage.setItem(
      `${this.ORGANIZATION_INTERNSHIPS_KEY}-${organisation.id}`,
      JSON.stringify(generatedInternships)
    );
    return generatedInternships;
  }

  public createInternship(internship: InternshipModel): void {
    const storedInternships = window.localStorage.getItem(
      this.ORGANIZATION_INTERNSHIPS_KEY
    );
    let newStoredInternships: InternshipModel[] = [];
    if (!storedInternships) {
      newStoredInternships.push(...INTERNSHIPS);
    } else {
      newStoredInternships.push(...JSON.parse(storedInternships));
    }
    newStoredInternships.push(internship);
    window.localStorage.setItem(
      `${this.ORGANIZATION_INTERNSHIPS_KEY}-${internship.organisation.id}`,
      JSON.stringify(newStoredInternships)
    );
    this.internshipService.updateInternships(newStoredInternships);
  }

  public deleteInternship(internshipId: string): void {
    const storedInternships = window.localStorage.getItem(
      this.ORGANIZATION_INTERNSHIPS_KEY
    );
    if (storedInternships) {
      const parsedInternships = JSON.parse(
        storedInternships
      ) as InternshipModel[];
      const newInternships = parsedInternships.filter(
        (internship) => String(internship.id) !== String(internshipId)
      );
      window.localStorage.setItem(
        `${this.ORGANIZATION_INTERNSHIPS_KEY}-${internshipId}`,
        JSON.stringify(newInternships)
      );
      this.internshipService.updateInternships(newInternships);
    }
  }

  public isLoggedIn(): boolean {
    const user = window.localStorage.getItem(this.USER_KEY);
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
