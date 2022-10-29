import { TLImage } from './../../models/tier-list.models';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tier-list-image',
  templateUrl: './tier-list-image.component.html',
  styleUrls: ['./tier-list-image.component.scss'],
})
export class TierListImageComponent implements OnInit {
  @Input() image!: TLImage;
  constructor() {}

  ngOnInit(): void {}
}
