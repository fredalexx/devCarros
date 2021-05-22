import { ServicoDTO } from './dto/servico-dto';
import { map } from 'rxjs/operators';
import { ServicoModel } from './model/servico-model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  url: string = `${environment.URL_SERVIDOR}/servico`;

  constructor(private http: HttpClient) { }

  buscar(): Observable<ServicoModel[]> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .get(this.url, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map((resposta) => <ServicoModel[]>resposta));
  }

  salvar(servico: ServicoDTO): Observable<ServicoModel> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .post(this.url, servico, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map((resposta) => <ServicoModel>resposta));
  }

  atualizar(servico: ServicoDTO) {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .put(this.url + '/' + servico.id, servico, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map((resposta) => <ServicoModel>resposta));
  }
}
