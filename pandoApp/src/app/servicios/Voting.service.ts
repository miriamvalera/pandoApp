import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
import { Vote } from '../modelos/Vote';


@Injectable({
	providedIn: 'root'
})
export class VotingService {
	constructor(private httpClient: HttpClient) {
	}

	send(votacion):Observable<Vote> {
		return this.httpClient.post<Vote>(`${environment.API_URL}/votaciones`, votacion);
	}

	get():Observable<Vote[]> {
		return this.httpClient.get<Vote[]>(`${environment.API_URL}/votaciones`);
	} 

	getById(id):Observable<Vote>{
		return this.httpClient.get<Vote>(`${environment.API_URL}/resultados/${id}`);

	}
}