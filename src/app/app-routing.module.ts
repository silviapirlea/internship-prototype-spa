import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {StudentBoardComponent} from "./student-board/student-board.component";
import {OrganisationBoardComponent} from "./organisation-board/organisation-board.component";
import {RegisterComponent} from "./auth/register/register.component";
import {ProfileComponent} from "./student-board/profile/profile.component";
import {SearchInternshipsComponent} from "./student-board/search-internships/search-internships.component";
import {MyApplicationsComponent} from "./student-board/my-applications/my-applications.component";
import {ManageInternshipsComponent} from "./organisation-board/manage-internships/manage-internships.component";
import {StudentHomeComponent} from "./student-board/student-home/student-home.component";
import {OrganisationHomeComponent} from "./organisation-board/organisation-home/organisation-home.component";

const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'student-board',
    component: StudentBoardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: StudentHomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'search',
        component: SearchInternshipsComponent,
      },
      {
        path: 'my-applications',
        component: MyApplicationsComponent,
      }
    ]
  },
  { path: 'organisation-board',
    component: OrganisationBoardComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: OrganisationHomeComponent,
      },
      {
        path: 'manage-internships',
        component: ManageInternshipsComponent,
      },
    ]
  },
  { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
