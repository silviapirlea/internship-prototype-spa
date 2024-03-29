import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './auth/login/login.component';
import { StudentBoardComponent } from './student-board/student-board.component';
import { OrganisationBoardComponent } from './organisation-board/organisation-board.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuHeaderComponent } from './shared/menu-header/menu-header.component';
import { MenuHeaderItemComponent } from './shared/menu-header/menu-header-item/menu-header-item.component';
import { FloatingButton } from './shared/floating-button/floating-button.component';
import { ProfileComponent } from './student-board/profile/profile.component';
import { MyApplicationsComponent } from './student-board/my-applications/my-applications.component';
import { ManageInternshipsComponent } from './organisation-board/manage-internships/manage-internships.component';
import { InternshipCard } from 'src/app/organisation-board/manage-internships/components/internship-card/internship-card.component';
import { TextValue } from 'src/app/shared/text-value/text-value.component';
import { CreateInternshipModal } from 'src/app/organisation-board/manage-internships/components/create-internship-modal/create-internship-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InternshipService } from 'src/app/auth/service/internship.service';
import { ProfileComponent as OrganisationProfileComponent } from 'src/app/organisation-board/profile/profile.component';
import { ProfileCardComponent } from 'src/app/organisation-board/profile/components/profile-card/profile-card.component';
import { SearchComponent } from 'src/app/student-board/search/search.component';
import { CreateProfileModalComponent } from './student-board/profile/create-profile-modal/create-profile-modal.component';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';

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
    MyApplicationsComponent,
    ManageInternshipsComponent,
    FloatingButton,
    InternshipCard,
    TextValue,
    CreateInternshipModal,
    OrganisationProfileComponent,
    ProfileCardComponent,
    SearchComponent,
    CreateProfileModalComponent,
    FileUploadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [InternshipService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
