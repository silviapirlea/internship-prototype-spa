// ManageInternshipsComponent
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateInternshipModal } from 'src/app/organisation-board/manage-internships/components/create-internship-modal/create-internship-modal.component';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { InternshipService } from 'src/app/auth/service/internship.service';
import { StorageService } from 'src/app/auth/service/storage.service';
import { UserRoleEnum } from 'src/app/auth/model/user-role.enum';
import { UserModel } from 'src/app/auth/model/user.model';
@Component({
  selector: 'app-manage-internships',
  templateUrl: './manage-internships.component.html',
  styleUrls: ['./manage-internships.component.scss'],
})
export class ManageInternshipsComponent implements OnInit {
  internships: InternshipModel[];

  constructor(
    public modalService: NgbModal,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.getInternships();
  }

  deleteInternship(internshipId: string): void {
    this.storageService.deleteInternship(internshipId);
    this.getInternships();
  }

  openDialog() {
    const modalRef = this.modalService.open(CreateInternshipModal);
    modalRef.componentInstance.internshipCreated.subscribe(() => this.getInternships())
  }

  private getInternships() {
    const user = this.storageService.getUser() as UserModel;
    this.internships = this.storageService.getFilteredInternships(
      user.organisation!
    );
  }
}
