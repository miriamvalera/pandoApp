import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private _registro = [
    new Usuario(1, 'correo', 'contraseña', 'nombre', 'imagen de perfil')
  ]

  constructor(private _http: HttpClient) { }

  getRegistro(): Usuario[] {
    return this._registro;
  }

  addUsuarioToApi(nuevoUsuario: Usuario): Observable<Usuario> {
    console.log('nuevoUsuario:',nuevoUsuario);
    return this._http.post<Usuario>(`${environment.API_URL}/usuarios`, nuevoUsuario);
  }
  
}

