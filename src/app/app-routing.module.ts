import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {StudentBoardComponent} from "./student-board/student-board.component";
import {OrganisationBoardComponent} from "./organisation-board/organisation-board.component";
import {RegisterComponent} from "./auth/register/register.component";

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student-board', component: StudentBoardComponent },
  { path: 'organisation-board', component: OrganisationBoardComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
