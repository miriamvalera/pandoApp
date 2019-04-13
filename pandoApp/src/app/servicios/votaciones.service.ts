import { Injectable } from '@angular/core';
import { Voto } from '../modelos/voto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VotacionesService {

  private _votaciones=[
   // new Voto(1,'Este restaurante es una mierda', ['ir a Cenar','pepe'], 'si') 
  ];

  constructor(private _http:HttpClient) { }


  getVotaciones():Voto[]{
    return this._votaciones;
  }

  addVoto(votaciones: Voto){
    this._votaciones.push(votaciones);
   } 

   addVotoToApi():Observable<Voto[]>{
     let mock = this._http.get<Voto[]>('http://www.mocky.io/v2/5caf5bd33400006f27ab72e7');
     console.log("mock",mock);
     return mock;
    
  }
}
