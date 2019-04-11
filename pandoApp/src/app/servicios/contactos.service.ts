import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Usuario } from 'src/app/modelos/usuario';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})

export class ContactosService {

  constructor() { }

  private _usuarios = [
    new Usuario(23, ' Pepe', '****', 'Pepito','fotomia'),
    new Usuario(23, ' Juan', '**********', 'Juanito','fotomia'),    
    new Usuario(23, ' Pepe', '****', 'Pepito','fotomia'),
    new Usuario(23, ' Juan', '**********', 'Juanito','fotomia'),    
    new Usuario(23, ' Pepe', '****', 'Pepito','fotomia'),
    new Usuario(23, ' Juan', '**********', 'Juanito','fotomia')
  ];

  getUsuarios() {
    // console.log('Usuarios:', this._usuarios)
    return this._usuarios;
  }

}



