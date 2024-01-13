import { Component, OnInit } from '@angular/core';
import { UserModelDTO } from 'src/app/auth/model/user.model';
import { StorageService } from 'src/app/auth/service/storage.service';

@Component({
  selector: 'organisation-profile-component',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  constructor(private readonly storageUser: StorageService) {}

  ngOnInit(): void {}

  getStorageUserDTO(): UserModelDTO {
    const user = this.storageUser.getUser();
    const dto: UserModelDTO = { ...user };
    return dto;
  }
}
