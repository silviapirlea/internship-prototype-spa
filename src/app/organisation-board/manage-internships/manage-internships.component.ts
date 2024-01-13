import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateInternshipModal } from 'src/app/organisation-board/manage-internships/components/create-internship-modal/create-internship-modal.component';
@Component({
  selector: 'app-manage-internships',
  templateUrl: './manage-internships.component.html',
  styleUrls: ['./manage-internships.component.scss'],
})
export class ManageInternshipsComponent implements OnInit {
  constructor(public modalService: NgbModal) {}

  ngOnInit(): void {}

  openDialog() {
    const modalRef = this.modalService.open(CreateInternshipModal);
  }
}
