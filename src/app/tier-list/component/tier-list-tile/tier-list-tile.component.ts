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

  @Output() ImageDroppedOutsideList: EventEmitter<{
    event: CdkDragDrop<TLImage>;
    eventImage: TLImage;
    tile: TierListTileComponent;
  }> = new EventEmitter<{
    event: CdkDragDrop<TLImage>;
    eventImage: TLImage;
    tile: TierListTileComponent;
  }>();
  @Output() TierListTileResume: EventEmitter<TLTileResume> =
    new EventEmitter<TLTileResume>();

  backgroundColor: string = '';
  tierImages: TLImage[] = [];
  constructor() {}

  ngOnInit(): void {}

  drop(event: CdkDragDrop<TLImage[]> | any) {
    event.isPointerOverContainer
      ? moveItemInArray(
          this.tierImages,
          event.previousIndex,
          event.currentIndex
        )
      : '';
  }

  dropImageOutside(event: CdkDragDrop<TLImage>, eventImage: TLImage): void {
    if (!event.isPointerOverContainer) {
      this.ImageDroppedOutsideList.emit({ event, eventImage, tile: this });
    }
  }

  removeImage(imageToRemove: TLImage) {
    this.tierImages.splice(
      this.tierImages.findIndex((image) => image.index === imageToRemove.index),
      1
    );
  }

  submitTotal(): TLTile {
    return {
      title: this.title,
      images: this.tierImages,
      value: this.value,
    };
  }
}
