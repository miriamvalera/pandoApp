import { Component, OnInit } from '@angular/core';
import { Login } from '../modelos/login';
import { InicioService } from '../servicios/inicio.service';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nuevoUsuario = new Login(null,null);
  constructor(private _logServ:InicioService) { }

  ngOnInit() {
  }


  guardarUsuario(){
    console.log('Nuevo:', this.nuevoUsuario);
  }

  formularioLogin(){
    console.log('Nombre usuarix: ', this.nuevoUsuario);
    this._logServ.addUsuarioAPI(this.nuevoUsuario).subscribe(login=>{
      console.log('Contraseña: ',login);
    });
  }
 
}
