import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {VotingService} from '../servicios/Voting.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'votaciones',
	templateUrl: './votaciones.component.html',
	styleUrls: ['./votaciones.component.scss']
})
export class VotacionesComponent implements OnInit {
	votingForm: FormGroup;
	options: FormArray;

	constructor(private service: VotingService, private http:HttpClient, private router: Router, private formBuilder: FormBuilder) {

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
			this.service.send(votingForm.value);
		} else {
			console.error('Invalid form');
		}
	}


}
