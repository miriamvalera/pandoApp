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

  regUser = new Usuario(null, null, null, null, null);
  psswrep = null;

  constructor(private _regServ:RegistroService, private _router:Router) { }

  ngOnInit() {
  }

  comparaPass() {
    return (this.regUser.pssw === this.psswrep);
  }

  generaUsuario() {
    console.log('regUser:', this.regUser);
    this._regServ.addUsuarioToApi(this.regUser).subscribe(unUsuario=>{
      console.log('respuesta post:', unUsuario);
      this._router.navigate(['/usuarios']);
    });

  }

}

