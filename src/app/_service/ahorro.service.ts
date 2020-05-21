import { Ahorro } from './../_model/ahorro';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AhorroService {

  url: string = `${environment.HOST}/cuenta/ahorro`; 

  constructor(private http: HttpClient) { }

  registrar(ahorro: Ahorro) {
    return this.http.post(this.url, ahorro);
  }

}
