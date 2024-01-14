import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StorageService } from 'src/app/auth/service/storage.service';
import { rangeValidator } from 'src/app/organisation-board/manage-internships/components/create-internship-modal/validators';
import { buildCreateInternshipModel } from 'src/helpers/buildCreateInternshipModel';

@Component({
  selector: 'create-internship-modal',
  templateUrl: './create-internship-modal.component.html',
  styleUrls: ['./create-internship-modal.component.scss'],
})
export class CreateInternshipModal implements OnInit {
  @Output() internshipCreated = new EventEmitter<any>();

  readonly TITLE = 'title';
  readonly POSITION = 'position';
  readonly TYPE_OF_WORK = 'typeOfWork';
  readonly LOCATION = 'location';
  readonly END_DATE = 'endDate';
  readonly RANGE_LOW = 'lowRange';
  readonly RANGE_HIGH = 'highRange';
  readonly DESCRIPTION = 'description';
  readonly TECHNOLOGIES = 'technologies';

  closeResult = '';

  formGroup: FormGroup;
  errorMessage: string;

  constructor(
    public activeModal: NgbActiveModal,
    private readonly formBuilder: FormBuilder,
    private readonly storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  onRegister(): void {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    this.activeModal.dismiss('Submitted');
    const loggedUser = this.storageService.getUser();
    const createdInternship = buildCreateInternshipModel(
      this.formGroup.value,
      loggedUser['organisation']
    );
    this.storageService.createInternship(createdInternship);

    // Emit the newly created internship to the parent component
    this.internshipCreated.emit(createdInternship);
  }

  private initForm(): void {
    this.formGroup = this.formBuilder.group(
      {
        title: new FormControl(''),
        position: new FormControl(''),
        typeOfWork: new FormControl(''),
        location: new FormControl(''),
        endDate: new FormControl(''),
        lowRange: new FormControl(''),
        highRange: new FormControl(''),
        description: new FormControl(''),
        technologies: new FormControl(''),
      },
      { validators: rangeValidator }
    );
  }
}
