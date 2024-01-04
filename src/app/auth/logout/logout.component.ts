import { Component, OnInit } from '@angular/core';
import {StorageService} from "../service/storage.service";
import {Router} from "@angular/router";
import {RoutesConstants} from "../../shared/RoutesConstants";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private readonly storageService: StorageService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.storageService.clean();
    this.router.navigate([RoutesConstants.LANDING]);
  }

}
