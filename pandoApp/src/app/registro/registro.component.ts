import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelos/usuario';
import { RegistroService } from '../servicios/registro.service';
import { Router } from '@angular/router';
import { Registro } from '../modelos/registro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  regUser = new Registro (null, null, null, null, null);
  constructor() { }

  ngOnInit() {
  }

  generaUsuario(){
      console.log('respuesta post:',this.regUser);
    };
  }

