import {Component, OnInit} from '@angular/core';
import {StudentProfileModel} from "../model/student-profile.model";
import {StorageService} from "../../auth/service/storage.service";
import {StudentService} from "../service/student.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CreateProfileModalComponent} from "./create-profile-modal/create-profile-modal.component";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: StudentProfileModel;

  constructor(private readonly storageService: StorageService,
              private readonly studentService: StudentService,
              private readonly modalService: NgbModal,
              private sanitizer: DomSanitizer
              ) {
  }

  ngOnInit(): void {
    this.getProfile();
    console.log(this.profile?.cv)
  }

  private getProfile() {
    const user = this.storageService.getUser();
    const existingProfile = this.studentService.getProfile(user?.id);
    if(existingProfile) {
      this.profile = existingProfile;
    }
  }

  openCreateProfileModal() {
    const modalRef = this.modalService.open(CreateProfileModalComponent, {
      centered: true,
      windowClass: 'create-profile-modal',
    });
    modalRef.componentInstance.title = 'Create your Profile!';
    modalRef.componentInstance.saveEvent.subscribe((profile: StudentProfileModel) => this.profile = profile);
  }

  downloadFile(file: File): void {
    const blob = new Blob([file], { type: file.type });
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;

    // Append the link to the body, click it, and remove it.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  getSafeUrl(file: File): any {
    const blob = new Blob([file], { type: file.type });
    const url = window.URL.createObjectURL(blob);

    // Sanitize the URL to avoid security risks
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
