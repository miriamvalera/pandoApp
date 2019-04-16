import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../modelos/chat';
import { Mensage } from '../modelos/mensaje';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http:HttpClient, private socket: Socket) { }

    currentDocument = this.socket.fromEvent<Mensage>('document');
    documents = this.socket.fromEvent<string[]>('documents');


    editDocument(document: Mensage) {
      this.socket.emit('editDoc', document);
    }


  getUsuariosChatAPI():Observable<Chat[]>{
    return this._http.get<Chat[]>('http://www.mocky.io/v2/5cb1b1ff33000079205720b0');
  }
}
