// internship.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { InternshipModel } from 'src/app/auth/model/internship.model';

@Injectable({
  providedIn: 'root',
})
export class InternshipService {
  private internshipsSubject = new Subject<InternshipModel[]>();
  internships$ = this.internshipsSubject.asObservable();

  updateInternships(internships: InternshipModel[]): void {
    this.internshipsSubject.next(internships);
  }
}
