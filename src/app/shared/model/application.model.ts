import {ApplicationStatusEnum} from "./application-status.enum";

export interface ApplicationModel {
  id: string,
  studentId: string,
  internshipId: string,
  status: ApplicationStatusEnum
}
