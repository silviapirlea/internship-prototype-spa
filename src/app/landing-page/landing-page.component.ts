import { Component, OnInit } from '@angular/core';
import {UserRoleEnum} from "../auth/model/user-role.enum";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  readonly UserRoleEnum = UserRoleEnum;

  constructor() { }

  ngOnInit(): void {
  }

}
