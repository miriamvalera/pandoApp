import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { Observable, BehaviorSubject } from 'rxjs';
import { Chat } from '../modelos/chat';
import { Mensage } from '../modelos/mensaje';
import { ActivatedRoute } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private _mensajes = [];
  private _msgsObservable: Observable<any>;
  private $msgsObserver = new BehaviorSubject(this._mensajes);
  username = 0;

  constructor(private _http:HttpClient, private socket: Socket, private _chatService: ChatService, private _route: ActivatedRoute) {
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
    getParametroUsuario(){
      this._route.params.subscribe(parametros => {
          this.username = parseInt(parametros.id);
          console.log("parametros", parametros.id);
          //console.log("this.username", this.username);
        });
    }
   
    found(data) {      
      if (data !== undefined && this.username !== undefined) {
        data.find(function (element) {
          console.log("found", element.name);
          if (data.id === this.username) {
            return element.name;
          }
        });
      }

    }
    getMensajes(): Observable<any> {
      this._msgsObservable = this.$msgsObserver.asObservable();
      return this._msgsObservable;
    }

  getUsuariosChatAPI():Observable<Chat[]>{
    return this._http.get<Chat[]>('http://www.mocky.io/v2/5cb6df55320000e110cd4673');
  }

}
