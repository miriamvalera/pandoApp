import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../modelos/usuario';
import { RegistroComponent } from '../registro/registro.component';
import { Observable } from 'rxjs';
import { get } from 'https';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

    private _registro=[
      new Usuario(1,'correo','contraseña','nombre','imagen de perfil')
    ]

  constructor(private _http:HttpClient) { }

getRegistro():Usuario[]{
  return this._registro;
}

  addUsuario(registro: Usuario){
    this._registro.push(registro);
 } 

    addUsuarioToApi(nuevoUsuario: Usuario):Observable<Usuario>{
      return this._http.post<Usuario>('http://www.mocky.io/v2/5cb03e6f3100006c00e132bb',nuevoUsuario);
  }
}