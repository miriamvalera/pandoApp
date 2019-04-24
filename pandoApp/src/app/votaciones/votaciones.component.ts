import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VotingService } from '../servicios/Voting.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Vote } from 'src/app/modelos/Vote';

@Component({
	selector: 'votaciones',
	templateUrl: './votaciones.component.html',
	styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {
	votingForm: FormGroup;
	options: FormArray;

	constructor(private service: VotingService, private http: HttpClient, private router: Router, private formBuilder: FormBuilder) {

	}

	ngOnInit() {
		this.votingForm = this.formBuilder.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			options: this.formBuilder.array([this.createOption()])
		});

	}

	private createOption(): FormGroup {
		return this.formBuilder.group({
			description: ['', Validators.required],
		});
	}

	addOption(): void {
		this.options = this.votingForm.get('options') as FormArray;
		this.options.push(this.createOption());
	}

	removeOption(index): void {
		this.options = this.votingForm.get('options') as FormArray;

		!!this.options.length && this.options.removeAt(index);
	}

	submitVotingForm(votingForm) {
		if (votingForm.valid) {
			const formControls = votingForm.controls;
			console.log('formControls:', formControls);
			const opciones= formControls.options.value.map(function(aV){
				return aV.description
			});
			const votoNuevo = new Vote(0, formControls.title.value, formControls.description.value,opciones);
			console.log('votoNuevo:', votoNuevo);
			this.service.send(votoNuevo).subscribe(votacionreg=>{
				console.log('votacionreg:',votacionreg);
				//this.router.navigate(['/votaciones',votacionreg._id]);
			});
		} else {
			console.error('Error');
		}
	}

}