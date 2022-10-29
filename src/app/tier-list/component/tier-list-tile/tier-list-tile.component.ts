import {
  TLImage,
  TLTile,
  TLTileResume,
  TLTileTitle,
} from './../../models/tier-list.models';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ThisReceiver } from '@angular/compiler/public_api';

@Component({
  selector: 'tier-list-tile',
  templateUrl: './tier-list-tile.component.html',
  styleUrls: ['./tier-list-tile.component.scss'],
})
export class TierListTileComponent implements OnInit {
  @Input() value!: number;
  @Input() title!: TLTileTitle;

  @Output() TierListTileResume: EventEmitter<TLTileResume> =
    new EventEmitter<TLTileResume>();

  backgroundColor: string = '';
  tierImages: TLImage[] = [];
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<TLImage[]> | any) {
    console.log(event, ' event');
    moveItemInArray(this.tierImages, event.previousIndex, event.currentIndex);
  }

  submitTotal(): TLTile {
    return {
      title: this.title,
      images: this.tierImages,
      value: this.value,
    };
  }
}
