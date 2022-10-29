import { Image } from 'src/app/core/models/core.models';

export interface TLBoard {
  name: string;
  tiles: TLTile[];
}

export interface TLTile {
  title: TLTileTitle;
  images: TLImage[];
  value: number;
}

export interface TLTileTitle {
  label: string;
  backgroundColor: string;
}

export interface TLImage extends Image {
  identifier: string;
  index: number;
}
