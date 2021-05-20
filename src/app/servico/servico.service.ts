import { ServicoDTO } from './dto/servico-dto';
import { map } from 'rxjs/operators';
import { ServicoModel } from './model/servico-model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicoService {
  url: string = environment.URL_SERVIDOR + 'servicos';

  constructor(private http: HttpClient) { }

  buscar(): Observable<ServicoModel[]> {
    return this.http
      .get(this.url)
      .pipe(map((resposta) => <ServicoModel[]>resposta));
  }

  salvar(servico: ServicoDTO): Observable<ServicoModel> {
    return this.http
      .post(this.url, servico)
      .pipe(map((resposta) => <ServicoModel>resposta));
  }

  atualizar(servico: ServicoDTO) {
    return this.http
      .put(this.url + '/' + servico.id, servico)
      .pipe(map((resposta) => <ServicoModel>resposta));
  }
}
