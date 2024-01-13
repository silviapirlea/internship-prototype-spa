import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InternshipModel } from 'src/app/auth/model/internship.model';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  private internshipsSubject = new BehaviorSubject<InternshipModel[]>([]);
  internships$ = this.internshipsSubject.asObservable();

  updateInternships(internships: InternshipModel[]): void {
    this.internshipsSubject.next(internships);
  }
}
