import { Injectable } from '@angular/core';
import { Voto } from '../modelos/voto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VotacionesComponent } from '../votaciones/votaciones.component';

@Injectable({
  providedIn: 'root'
})
export class VotacionesService {

  private _votaciones=[
    new Voto(1,'Este restaurante es una mierda', 'ir a Cenar', 'si') 
  ];

  constructor(private _http:HttpClient) { }


  getVotaciones():Voto[]{
    return this._votaciones;
  }

  addVoto(votaciones: Voto){
    this._votaciones.push(votaciones);
   } 

   addVotoToApi(nuevaVotacion: Voto):Observable<Voto>{
     return this._http.post<Voto>('http://www.mocky.io/v2/5caf3ca53400006c24ab71de',nuevaVotacion);
    
  }
}
