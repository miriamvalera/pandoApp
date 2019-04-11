import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'votaciones',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {

  private _votaciones=[
    new Voto{1,'ir a Cenar'},
    new Voto{1,'ir a Comer'},
    new Voto{1,'ir de Copas'}, 
    new Voto{1,'ir a Pasear'} 

  ];

  constructor() { }

  getVoto():Voto[]{
  	return this._votaciones;
  }

  getVotoById(unVot){
    return this._votaciones.find(function(aVot){
      return aVot.tid==unVot;
    });
  }

  ngOnInit() {
  }

  generaVotacion(){

  }

}
