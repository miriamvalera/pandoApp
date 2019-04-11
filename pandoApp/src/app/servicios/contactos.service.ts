import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/internal/Observable';





@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(private _http: HttpClient) { }

  geAppAPI():Observable<Contacto[]>{
    return this._http.get<Contacto[]>('http://www.mocky.io/v2/5cadb0952f00000d343a96e8')
  }


}


