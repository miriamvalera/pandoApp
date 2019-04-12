import { Component, OnInit } from '@angular/core';
import { Voto } from '../modelos/voto';
import { Router } from '@angular/router';
import { VotacionesService } from '../servicios/votaciones.service';

@Component({
  selector: 'votaciones',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {

  nuevaVotacion = new Voto(1,'Este restaurante es una mierda', 'ir a Cenar', 'si');

  constructor(private _votaServ:VotacionesService, private _router:Router) {}
    

  ngOnInit() {
  }

  generaVotacion(votacionForm){
    this._votaServ.addVotoToApi(this.nuevaVotacion).subscribe(unaVotacion =>{
      console.log('respuesta post:',unaVotacion);
      this._router.navigate(['/votaciones']);
    });
  }

}
