import { TierListImageHolderPaneComponent } from './component/tier-list-image-holder-pane/tier-list-image-holder-pane.component';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { TierListImageComponent } from './component/tier-list-image/tier-list-image.component';
import { TierListBoardComponent } from './component/tier-list-board/tier-list-board.component';
import { TierListTileComponent } from './component/tier-list-tile/tier-list-tile.component';
import { CommonModule } from '@angular/common';
import { SocketClientService } from './services/tier-list.service';
import { HttpClientModule } from '@angular/common/http';

const components = [
  TierListBoardComponent,
  TierListImageComponent,
  TierListTileComponent,
  TierListImageHolderPaneComponent,
];

@NgModule({
  imports: [DragDropModule, MatButtonModule, CommonModule, HttpClientModule],
  exports: components,
  declarations: components,
  providers: [SocketClientService],
})
export class TierListModule {}
