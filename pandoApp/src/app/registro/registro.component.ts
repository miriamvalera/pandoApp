import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { RegistroService } from '../servicios/registro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  nuevoUsuario= new Usuario(1,'correo','contraseña','nombre','imagen de perfil');

  constructor(private _usuServ:RegistroService, private _router:Router) { }

  ngOnInit() {
  }

  generaUsuario(elForm){
    this._usuServ.addUsuarioToApi(this.nuevoUsuario).subscribe(unUsuario =>{
      console.log('respuesta post:',unUsuario);
      this._router.navigate(['/registro']);
    });
  }

}
