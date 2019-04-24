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
  _id = null;
  title = null;

  constructor(private _votingService:VotingService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(parametros => {
      this._id = parseInt(parametros.id);
      console.log("parametros", parametros.id);
      return this._id;
      //console.log("this.username", this.username);
    });
    // this._votingService.getById(ResultadosComponent._id).subscribe(dato => {
    //   console.log('dato.id', dato);

    //   for (let i = 0; i < dato.length; i++) {
    //     if (dato[i].id == this._id) {
    //       this.title = dato[i].name;
    //       console.log("found", dato[i].name);
    //     }
    //   }
      
    // });
  }

}

  /*this._chatService.getMensajes().subscribe(data => {
    this.losmsgs = data;
  }); 
  */
