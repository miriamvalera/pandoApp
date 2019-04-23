import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
	providedIn: 'root'
})
export class VotingService {
	constructor(private httpClient: HttpClient) {
	}

	send(votacion) {
		return this.httpClient.post(`${environment.API_URL}/votaciones`, votacion);
	}

	get(nuevoVoto) {
		return this.httpClient.get(`${environment.API_URL}/votaciones`);
	}
}