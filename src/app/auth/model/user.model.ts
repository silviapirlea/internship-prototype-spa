import {UserRoleEnum} from "./user-role.enum";

export interface UserModel {
  id?: string,
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  phone: string,
  role: UserRoleEnum
}
