import { TLSocketEventsPayload } from './../models/events.models';
import { TLUserSocketEventsENUM } from './../constants/events.constants';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable()
export class SocketClientService {
  ioClient: Socket;

  socketEventEmitter$: EventEmitter<{ eventName: string; args: any }> =
    new EventEmitter();

  constructor(private httpClient: HttpClient) {
    this.ioClient = io(environment.domain);
    console.log(this.ioClient);
    this.ioClient.onAny((eventName, args) => {
      console.log('[SOCKET IO EVENT]', eventName, args);
      this.socketEventEmitter$.emit({ eventName, args });
    });
  }
}
