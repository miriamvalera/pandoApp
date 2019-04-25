import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../modelos/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private _inicio =[
    new Login('ricardo@ricardo.com', '123')
  ];
  

  constructor(private _http:HttpClient) { }

  getUsuarios():Login[]{
    return this._inicio;
  }

  addUsuarioAPI(datosLogin: Login):Observable<Login>{
    console.log("asdas",datosLogin);
    return this._http.post<Login>(`${environment.API_URL}/auth`,datosLogin);

  }

}


