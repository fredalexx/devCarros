import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
apiurl=htpp
constructor(private http: HTTPClient) { }
buscar(){
  retur this.http.get(this.url);
}
}
