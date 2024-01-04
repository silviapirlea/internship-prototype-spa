import { Injectable } from '@angular/core';
import {UserService} from "./user.service";
import {Observable, of, switchMap, throwError} from "rxjs";
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly userService: UserService) { }

  login(email: string, password: string): Observable<UserModel> {
    return of(this.userService.findUser(email, password)).pipe(
      switchMap((user) => {
        return user
          ? of(user)
          : throwError(() => new Error("Invalid username or password!"));
      })
    )
  }
}
