import {Injectable} from '@angular/core';
import {UserModel} from "../model/user.model";
import {UserRoleEnum} from "../model/user-role.enum";

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  readonly USER_KEY = 'auth-user';

  constructor() { }

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

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(this.USER_KEY);
    return !!user;
  }

  public isStudentUser(): boolean {
    const user = this.getUser();
    return user ? user.role === UserRoleEnum.STUDENT: false;
  }

  public isOrganisationUser(): boolean {
    const user = this.getUser();
    return user ? user.role === UserRoleEnum.ORGANISATION: false;
  }
}
