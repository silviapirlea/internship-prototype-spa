import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentBoardComponent } from './student-board/student-board.component';
import { OrganisationBoardComponent } from './organisation-board/organisation-board.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuHeaderComponent } from './shared/menu-header/menu-header.component';
import { MenuHeaderItemComponent } from './shared/menu-header/menu-header-item/menu-header-item.component';
import { FloatingButton } from './shared/floating-button/floating-button.component';
import { ProfileComponent } from './student-board/profile/profile.component';
import { SearchInternshipsComponent } from './student-board/search-internships/search-internships.component';
import { MyApplicationsComponent } from './student-board/my-applications/my-applications.component';
import { ManageInternshipsComponent } from './organisation-board/manage-internships/manage-internships.component';
import { StudentHomeComponent } from './student-board/student-home/student-home.component';
import { OrganisationHomeComponent } from './organisation-board/organisation-home/organisation-home.component';
import { InternshipsList } from './organisation-board/manage-internships/components/internships-list/internships-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    StudentBoardComponent,
    OrganisationBoardComponent,
    LogoutComponent,
    RegisterComponent,
    MenuHeaderComponent,
    MenuHeaderItemComponent,
    ProfileComponent,
    SearchInternshipsComponent,
    MyApplicationsComponent,
    ManageInternshipsComponent,
    StudentHomeComponent,
    OrganisationHomeComponent,
    FloatingButton,
    InternshipsList,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
