import {Injectable} from '@angular/core';
import {UserModel} from "../model/user.model";
import {UserRoleEnum} from "../model/user-role.enum";
import { ORGANISATIONS } from 'src/app/auth/model/contants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: UserModel[] = [
    {
      id: 'id1',
      email: 'silvia.pirlea@yahoo.com',
      password: 'silvia',
      firstName: 'Silvia',
      lastName: 'Pirlea',
      phone: '0788654234',
      role: UserRoleEnum.STUDENT,
      organisation: ORGANISATIONS[1],
    },
    {
      id: 'id2',
      email: 'ana.nica@yahoo.com',
      password: 'ana',
      firstName: 'Ana',
      lastName: 'Nica',
      phone: '0788654234',
      role: UserRoleEnum.ORGANISATION,
      organisation: ORGANISATIONS[1],
    },
  ];

  constructor() {}

  addUser(user: UserModel): void {
    this.users.push(user);
  }

  findUser(email: string, password: string): UserModel | undefined {
    return this.users.find(
      (user) => user.email === email && user.password === password
    );
  }

  existsByEmail(email: string): boolean {
    return this.users.find((user) => user.email === email) ? true : false;
  }

  printUsers(): void {
    this.users.forEach(console.log);
  }
}
