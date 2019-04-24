import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario';
import { HttpClient } from '@angular/common/http';





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
    return this._http.get<Usuario[]>('http://www.mocky.io/v2/5cb1b29c33000079205720b1');
  }

}



