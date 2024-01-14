import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {v4 as uuidv4} from 'uuid';
import {StorageService} from "../../../auth/service/storage.service";
import {StudentProfileModel} from "../../model/student-profile.model";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-create-profile-modal',
  templateUrl: './create-profile-modal.component.html',
  styleUrls: ['./create-profile-modal.component.scss']
})
export class CreateProfileModalComponent implements OnInit {
  @Input() title: string;
  @Output() saveEvent: EventEmitter<StudentProfileModel> = new EventEmitter<StudentProfileModel>();

  readonly ADDRESS = 'address';
  readonly CV = 'cv';
  readonly INTERESTS = 'interests';

  formGroup: FormGroup;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly activeModal: NgbActiveModal,
              private readonly storageService: StorageService,
              private readonly studentService: StudentService
              ) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formGroup = this.formBuilder.group({
      address: new FormControl('', [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      interests: new FormControl('')
    })
  }

  onClose() {
    this.activeModal.close();
  }

  onSave() {
    const address = this.formGroup.controls[this.ADDRESS].value;
    const cv = this.formGroup.controls[this.CV].value;
    const interests = this.formGroup.controls[this.INTERESTS].value;
    const id = uuidv4().toString();
    const user = this.storageService.getUser();

    const profile: StudentProfileModel = {id, userId: user?.id ,address, cv, interests};
    console.log(profile)
    this.studentService.createProfile(profile);
    this.saveEvent.emit(profile);
    this.activeModal.close();
  }

}
