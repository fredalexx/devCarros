import { VeiculoDTO } from './dto/veiculo-dto';
import { VeiculoModel } from './model/veiculo-model';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  url: string = environment.URLSERVIDOR + 'veiculos';

  constructor(private http: HttpClient) {}

  buscar(): Observable<VeiculoModel[]> {
    return this.http
      .get(this.url)
      .pipe(map((resposta) => <VeiculoModel[]>resposta));
  }

  buscarPorId(id: number): Observable<VeiculoModel> {
    return this.http
      .get(this.url + '/' + id)
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }

  salvar(veiculo: VeiculoDTO): Observable<VeiculoModel> {
    return this.http
      .post(this.url, veiculo)
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }

  atualizar(veiculo: VeiculoDTO) {
    return this.http
      .put(this.url + '/' + veiculo.id, veiculo)
      .pipe(map((resposta) => <VeiculoModel>resposta));
  }
}
