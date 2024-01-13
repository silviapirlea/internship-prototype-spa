import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'create-internship-modal',
  templateUrl: './create-internship-modal.component.html',
  styleUrls: ['./create-internship-modal.component.scss'],
})
export class CreateInternshipModal implements OnInit {
  closeResult = '';

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}
}
