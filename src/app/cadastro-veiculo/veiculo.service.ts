import { VeiculoDTO } from './dto/veiculo-dto';
import { VeiculoModel } from './model/veiculo-model';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  url: string = `${environment.URL_SERVIDOR}/veiculo`;

  constructor(private http: HttpClient) { }

  buscar(): Observable<VeiculoModel[]> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .get(this.url, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map((resposta) => <VeiculoModel[]>resposta));
  }

  buscarPorId(id: number): Observable<VeiculoModel> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .get(this.url + '/' + id,
        {
          headers: new HttpHeaders({
            'Authorization': token
          })
        })
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }

  salvar(veiculo: VeiculoDTO): Observable<VeiculoModel> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .post(this.url, veiculo, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }

  atualizar(veiculo: VeiculoDTO) {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http
      .put(this.url + '/' + veiculo.id, veiculo, {
        headers: new HttpHeaders({
          'Authorization': token
        })
      })
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }

  excluir(id: VeiculoDTO): Observable<VeiculoModel> {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return this.http.delete(this.url + '/' + id, {
      headers: new HttpHeaders({
        'Authorization': token, 'Access-Control-Allow-Origin': '*',
      })
    })
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }
}
