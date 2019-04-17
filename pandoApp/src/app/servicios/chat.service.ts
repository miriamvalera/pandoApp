import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { Observable, BehaviorSubject } from 'rxjs';
import { Chat } from '../modelos/chat';
import { Mensage } from '../modelos/mensaje';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _mensajes = [];
  private _msgsObservable: Observable<any>;
  private $msgsObserver = new BehaviorSubject(this._mensajes);

  constructor(private _http:HttpClient, private socket: Socket) {
    this.socket.on('msg', (data) => {
      // console.log('data:', data, this._mensajes);
      this._mensajes.push(data);
      this.$msgsObserver.next(this._mensajes);
    });
   }

   sendMess(msg) {
      this._mensajes.push(msg);
      this.socket.emit('msg', msg);
    }

    getMensajes(): Observable<any> {
      this._msgsObservable = this.$msgsObserver.asObservable();
      return this._msgsObservable;
    }

  getUsuariosChatAPI():Observable<Chat[]>{
    return this._http.get<Chat[]>('http://www.mocky.io/v2/5cb6df55320000e110cd4673');
  }
}
