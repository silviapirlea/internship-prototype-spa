import { Component, OnInit } from '@angular/core';
import {StorageService} from "../../auth/service/storage.service";
import {UserRoleEnum} from "../../auth/model/user-role.enum";
import {StudentMenuSectionEnum} from "./sections/student-menu-section.enum";
import {OrganisationMenuSectionEnum} from "./sections/organisation-menu-section.enum";

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  sections: string[] = []

  constructor(private readonly storageService: StorageService) { }

  ngOnInit(): void {
    this.setSections();
  }

  private setSections() {
    const user = this.storageService.getUser();
    if(user.role.includes(UserRoleEnum.STUDENT)) {
      this.sections = Object.values(StudentMenuSectionEnum);
    }
    else if(user.role.includes(UserRoleEnum.ORGANISATION)) {
      this.sections = Object.values(OrganisationMenuSectionEnum);
    }
    else {
      this.sections = [];
    }
  }
}
