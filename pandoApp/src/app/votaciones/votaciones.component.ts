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



  constructor(private _votaServ:VotacionesService, private _router:Router) {}
    

  ngOnInit() {
  }

  generaVotacion(elForm){
    this._votaServ.addVotoToApi(this.nuevaVotacion).subscribe(unaVotacion =>{
      console.log('respuesta post:',unaVotacion);
      this._router.navigate(['/votaciones']);
    });
  }

}
