import { environment } from './../../../environments/environment';
import { ClienteModel } from './model/ClienteModel';
import { ClienteDTO } from './dto/ClienteDTO';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url: string = `${environment.URL_SERVIDOR}/cliente`;

  constructor(private http: HttpClient) { }

  salvar(cliente: ClienteDTO): Observable<ClienteModel> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .post(this.url, cliente, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map(resposta => <ClienteModel>resposta));
  }
}
