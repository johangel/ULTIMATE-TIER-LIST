import { SocketClientService } from 'src/app/tier-list/services/tier-list.service';
import { Injectable } from '@angular/core';
import { TLSocketEventsPayload } from 'src/app/tier-list/models/events.models';
import { TLUserSocketEventsENUM } from 'src/app/tier-list/constants/events.constants';
import { TLUser } from '../models/user.models';

@Injectable()
export class UserService {
  user: TLUser = {};
  usersList: TLUser[] = [];

  constructor(private socketService: SocketClientService) {
    this.setSocketEventListener();
  }

  setUserName(
    message: TLSocketEventsPayload[TLUserSocketEventsENUM.ASSIGN_NAME]
  ) {
    this.socketService.ioClient.emit(
      TLUserSocketEventsENUM.ASSIGN_NAME,
      message
    );
  }

  toggleOnlineStatus(
    message: TLSocketEventsPayload[TLUserSocketEventsENUM.ASSIGN_ONLINE_STATUS]
  ) {
    this.socketService.ioClient.emit(
      TLUserSocketEventsENUM.ASSIGN_ONLINE_STATUS,
      message
    );
  }

  private setSocketEventListener() {
    this.socketService.socketEventEmitter$.subscribe((event) => {
      switch (event.eventName) {
        case TLUserSocketEventsENUM.ASSIGN_NAME_CONFIRMED:
          this.user = (
            event.args as TLSocketEventsPayload[TLUserSocketEventsENUM.ASSIGN_NAME_CONFIRMED]
          ).user;
          break;

        case TLUserSocketEventsENUM.ASSIGN_ONLINE_STATUS_CONFIRMED:
          this.user = (
            event.args as TLSocketEventsPayload[TLUserSocketEventsENUM.ASSIGN_ONLINE_STATUS_CONFIRMED]
          ).user;
          break;

        case TLUserSocketEventsENUM.UPDATE_USERS_ROOM_LIST:
          this.usersList = (
            event.args as TLSocketEventsPayload[TLUserSocketEventsENUM.UPDATE_USERS_ROOM_LIST]
          ).list.filter((user) => user.name !== this.user.name);
          break;

        default:
          break;
      }
    });
  }
}
