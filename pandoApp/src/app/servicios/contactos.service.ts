import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  constructor(private _http:HttpClient) { }

  // private _usuarios = [
  //   // new Usuario(23, ' Pepe', '****', 'Pepito','fotomia'),
  //   // new Usuario(23, ' Juan', '**********', 'Juanito','fotomia'),    
  //   // new Usuario(23, ' Pepe', '****', 'Pepito','fotomia'),
  //   // new Usuario(23, ' Juan', '**********', 'Juanito','fotomia'),    
  //   // new Usuario(23, ' Pepe', '****', 'Pepito','fotomia'),
  //   // new Usuario(23, ' Juan', '**********', 'Juanito','fotomia')
  // ];

  getUsuariosAPI():Observable<Usuario[]>{
    // console.log('Usuarios:', this._usuarios)
    // return this._usuarios;
    return this._http.get<Usuario[]>(`${environment.API_URL}/usuarios`);
  }

}


