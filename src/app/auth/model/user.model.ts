import { Entity } from 'src/app/auth/model/entity';
import { UserRoleEnum } from './user-role.enum';

export type UserModel = {
  id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRoleEnum;
  organisation?: Entity;
};

export type UserModelDTO = Omit<UserModel, 'id' | 'password'>;
