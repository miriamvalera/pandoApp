import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
    return this._http.post<Usuario>('http://172.27.96.127:8080/api/usuarios', nuevoUsuario);
  }
  
}