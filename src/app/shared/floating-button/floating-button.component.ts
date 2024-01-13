import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'floating-button',
  templateUrl: './floating-button.component.html',
  styleUrls: ['./floating-button.component.scss'],
})
export class FloatingButton implements OnInit {
  @Input() onClick: () => void;

  constructor() {}

  ngOnInit(): void {}
}
