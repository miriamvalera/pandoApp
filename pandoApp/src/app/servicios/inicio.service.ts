import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../modelos/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private _inicio =[
    new Login('ricardo@ricardo.com', '123'),
    new Login('ricardo@ricardo.com', '123'),
    new Login('ricardo@ricardo.com', '123x')
  ];
  

  constructor(private _http:HttpClient) { }

  getUsuarios():Login[]{
    return this._inicio;
  }

  addUsuarioAPI(datosLogin: Login):Observable<Login>{
    return this._http.post<Login>(' http://www.mocky.io/v2/5cb05ad43100005500e13395',datosLogin);
  }

}


