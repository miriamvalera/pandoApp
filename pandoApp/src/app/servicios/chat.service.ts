import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Chat } from '../modelos/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private _http:HttpClient) { }

  getUsuariosChatAPI():Observable<Chat[]>{
    return this._http.get<Chat[]>('http://www.mocky.io/v2/5cb1b1ff33000079205720b0');
  }
}
