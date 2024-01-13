import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'text-value',
  templateUrl: './text-value.component.html',
  styleUrls: ['./text-value.component.scss'],
})
export class TextValue implements OnInit {
  @Input() text: string;

  @Input() value: string;

  @Input() isGreen: boolean;

  @Input() isFullWidth: boolean;

  constructor() {}

  ngOnInit(): void {}
}
