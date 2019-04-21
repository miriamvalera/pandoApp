import { Component, OnInit } from '@angular/core';
import { ContactosService } from 'src/app/servicios/contactos.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})

export class ContactosComponent implements OnInit {

  usuarios = null;


  constructor(private _contactosServ: ContactosService) { }

  ngOnInit() {
    this._contactosServ.getUsuariosAPI().subscribe( usuariosDelServ => {
      this.usuarios = usuariosDelServ;
    });

  }

}
 