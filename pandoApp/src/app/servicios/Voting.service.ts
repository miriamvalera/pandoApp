import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = '';

@Injectable({
	providedIn: 'root'
})
export class VotingService {
	constructor(private httpClient: HttpClient) {
	}

	send(model) {
		return this.httpClient.post(URL, model);
	}

	get() {
		return this.httpClient.get(URL);
	}
}