import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../modelos/login';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  constructor(private _http:HttpClient) { }

  login(datosLogin: Login):Observable<any>{
    console.log("datosLogin:",datosLogin);
    return this._http.post<any>(`${environment.API_URL}/auth`,datosLogin);

  }

}


