import { Component, OnInit } from '@angular/core';
import { Voto } from '../modelos/voto';
import { Router } from '@angular/router';
import { VotacionesService } from '../servicios/votaciones.service';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'votaciones',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {
  opcionesVotos = [];

  constructor(private _votaServ: VotacionesService, private _router: Router, private formBuilder: FormBuilder) { }

  votacionForm: FormGroup;
  opciones: FormArray;

  ngOnInit() {
    this.opciones= this.formBuilder.array([new FormControl()])

    this.votacionForm = new FormGroup({
      titVotacion: new FormControl(),
      descVotacion: new FormControl(),
      opciones: this.opciones
    });

    
    //this._votaServ.addVotoToApi().subscribe( votServ =>{
      //console.log(this.votacionForm);
      //votServ.push(this.votacionForm)
      //console.log("votServ",votServ);
        // this.opcionesVotos.push(votServ);
   // });
  }

  generaVotacion() {
    const campos = this.votacionForm.controls;

    if(campos.titVotacion.value == null || campos.titVotacion.value.length<1){
      document.querySelector(".cnt-titVotacion").classList.add('empty');
    }else{      
      document.querySelector(".cnt-titVotacion").classList.remove('empty');
    }    
    if(campos.descVotacion.value == null || campos.descVotacion.value.length<1){
      document.querySelector(".cnt-descVotacion").classList.add('empty');
    }else{      
      document.querySelector(".cnt-descVotacion").classList.remove('empty');
    }
    if(campos.opciones.value.includes(null) || campos.opciones.value.length<1){
      document.querySelector(".cnt-opcVotacion").classList.add('empty');
    }else{      
      document.querySelector(".cnt-opcVotacion").classList.remove('empty');
    }
  }

  addOpcion(): void {
    this.opciones = this.votacionForm.get('opciones') as FormArray;
    this.opciones.push(new FormControl());
  }
  removeOpcion(): void {
    this.opciones = this.votacionForm.get('opciones') as FormArray;
    if(this.opciones.length>1){
      this.opciones.removeAt(this.opciones.length-1);
    }
  }


}
