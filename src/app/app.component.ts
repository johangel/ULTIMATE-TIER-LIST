import { Component } from '@angular/core';
import { SocketClientService } from './tier-list/services/tier-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public socket: SocketClientService) {}
  title = 'tier-list';
}
