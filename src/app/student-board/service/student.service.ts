import { Injectable } from '@angular/core';
import {StudentProfileModel} from "../model/student-profile.model";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly PROFILES_KEY = 'student-profiles'
  profiles: StudentProfileModel[] = [];

  constructor() { }

  createProfile(profile: StudentProfileModel) {
    this.profiles.push(profile);
    // window.sessionStorage.removeItem(this.PROFILES_KEY);
    // window.sessionStorage.setItem(this.PROFILES_KEY, JSON.stringify(this.profiles));
  }

  getProfile(userId: string): StudentProfileModel | undefined {
    // const existingProfiles = window.sessionStorage.getItem(this.PROFILES_KEY);
    // if(existingProfiles) {
    //   this.profiles = JSON.parse(existingProfiles);
    // }
    return this.profiles.find((profile) => profile.userId === userId);
  }
}
