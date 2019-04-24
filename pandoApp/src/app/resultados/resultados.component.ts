import { Component, OnInit } from '@angular/core';
import { VotingService } from '../servicios/Voting.service';
import { ActivatedRoute } from '@angular/router';
// import { ResultadoService } from '../servicios/resultado.service';


@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.scss']
})
export class ResultadosComponent implements OnInit {
  resultado = null;
  opcion_escogida = null;

  constructor(private _votingService: VotingService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(parametros => {
      console.log("parametros", parametros.id);

      this._votingService.getById(parametros.id).subscribe(dato => {
        console.log('dato:', dato);
        this.resultado = dato;
      });
      //console.log("this.username", this.username);
    });
  }

}

  /*this._chatService.getMensajes().subscribe(data => {
    this.losmsgs = data;
  }); 
  */
