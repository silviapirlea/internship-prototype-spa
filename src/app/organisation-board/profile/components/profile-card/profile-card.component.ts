import { Component, Input, OnInit } from '@angular/core';
import { UserModelDTO } from 'src/app/auth/model/user.model';

@Component({
  selector: 'organisation-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {
  @Input() user: UserModelDTO;

  constructor() {}

  ngOnInit(): void {}
}
