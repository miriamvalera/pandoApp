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
  }

  generaVotacion() {
    const campos = this.votacionForm.controls;
    console.log('campos:',campos,this);
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
