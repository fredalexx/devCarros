import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  apiUrl = 'http://localhost:8080/cliente';

  constructor(private http: HttpClient) {}

  buscar() {
    return this.http.get(this.apiUrl);
  }
}
