import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu-header-item',
  templateUrl: './menu-header-item.component.html',
  styleUrls: ['./menu-header-item.component.scss']
})
export class MenuHeaderItemComponent implements OnInit {
  @Input() section: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isActive() {
    return this.router.routerState.snapshot.url.includes('/' + this.section);
  }

}
