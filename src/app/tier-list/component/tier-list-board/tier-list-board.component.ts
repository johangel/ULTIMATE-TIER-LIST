import { TLTile, TLImage } from './../../models/tier-list.models';
import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { TierListTileComponent } from '../tier-list-tile/tier-list-tile.component';
import {
  moveItemInArray,
  transferArrayItem,
  CdkDragDrop,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'tier-list-board',
  templateUrl: './tier-list-board.component.html',
  styleUrls: ['./tier-list-board.component.scss'],
})
export class TierListBoardComponent {
  @ViewChildren(TierListTileComponent) tiles!: QueryList<TierListTileComponent>;
  @Input() TierListTitle!: string;

  amountOfTiles: TLTile[] = [
    {
      title: {
        label: 'ta bueno',
        backgroundColor: 'red',
      },
      value: 20,
      images: [],
    },
    {
      title: {
        label: 'ta majo',
        backgroundColor: 'yellow',
      },
      value: 10,
      images: [],
    },
    {
      title: {
        label: 'ta chimbo',
        backgroundColor: 'blue',
      },
      value: 5,
      images: [],
    },
  ];

  imagesPlaceholder: TLImage[] = [
    {
      url: 'https://via.placeholder.com/150',
      index: 1,
      identifier: 'testImage',
    },
    {
      url: 'https://via.placeholder.com/155',
      index: 2,
      identifier: 'testImage',
    },
    {
      url: 'https://via.placeholder.com/160',
      index: 3,
      identifier: 'testImage',
    },
    {
      url: 'https://via.placeholder.com/165',
      index: 4,
      identifier: 'testImage',
    },
  ];

  @Input() title: string = 'Tier list';

  totalScore!: TLTile[];

  getAllValues() {
    this.totalScore = this.tiles.map((tile) => tile.submitTotal());
  }

  onImageDroppedOutsideTile(componentEvent: {
    event: CdkDragDrop<TLImage>;
    eventImage: TLImage;
    tile: TierListTileComponent;
  }) {
    const event = componentEvent.event;
    const eventImage = componentEvent.eventImage;
    const previousTile = componentEvent.tile;
    const element = document.elementFromPoint(
      event.dropPoint.x,
      event.dropPoint.y
    );
    if (element) {
      const tile = this.tiles.find(
        (tile) =>
          tile.title.label + tile.title.backgroundColor ===
          element.getAttribute('identifier')
      );

      if (tile) {
        tile.tierImages.push(eventImage);
        previousTile.removeImage(eventImage);
      }
    }
  }

  dropImage(event: CdkDragDrop<TLImage>, eventImage: TLImage): void {
    const element = document.elementFromPoint(
      event.dropPoint.x,
      event.dropPoint.y
    );
    if (element) {
      const tile = this.tiles.find(
        (tile) =>
          tile.title.label + tile.title.backgroundColor ===
          element.getAttribute('identifier')
      );

      if (tile) {
        tile.tierImages.push(eventImage);
        this.imagesPlaceholder.splice(
          this.imagesPlaceholder.findIndex(
            (image) => image.index === eventImage.index
          ),
          1
        );
      }
    }
  }
}
