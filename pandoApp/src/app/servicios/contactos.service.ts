import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
<<<<<<< HEAD

=======
>>>>>>> 1f75e90f0d7f457b3ba89d7fe3a28289c432e8e0




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


