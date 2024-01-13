// ManageInternshipsComponent
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateInternshipModal } from 'src/app/organisation-board/manage-internships/components/create-internship-modal/create-internship-modal.component';
import { InternshipModel } from 'src/app/auth/model/internship.model';
import { InternshipService } from 'src/app/auth/service/internship.service';

@Component({
  selector: 'app-manage-internships',
  templateUrl: './manage-internships.component.html',
  styleUrls: ['./manage-internships.component.scss'],
})
export class ManageInternshipsComponent implements OnInit {
  internships: InternshipModel[];

  constructor(
    public modalService: NgbModal,
    private readonly internshipService: InternshipService
  ) {}

  ngOnInit(): void {
    this.internshipService.internships$.subscribe((internships) => {
      this.internships = internships;
    });
  }

  openDialog() {
    const modalRef = this.modalService.open(CreateInternshipModal);

    // Subscribe to the modal's result to get notified when it is closed
    modalRef.result.then(
      (result) => {
        // Handle the emitted event to update the internships array
        this.internships.push(result);
      },
      (reason) => {
        // Handle dismissal or any other case
        console.log(`Dismissed: ${reason}`);
      }
    );
  }
}
