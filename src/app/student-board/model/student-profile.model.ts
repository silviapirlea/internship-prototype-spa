export interface StudentProfileModel {
  id: string;
  userId: string;
  cv: File,
  otherFiles?: File,
  interests: string,
  address: string
}
