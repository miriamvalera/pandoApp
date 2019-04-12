import { Component, OnInit } from '@angular/core';
import { Login } from '../modelos/login';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  nuevoUsuario = new Login(null,null);
  constructor() { }

  ngOnInit() {
  }


  guardarUsuario(){
    console.log('Nuevo:', this.nuevoUsuario);
  }
 
}
