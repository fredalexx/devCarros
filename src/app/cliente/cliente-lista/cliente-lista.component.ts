import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.scss'],
})
export class ClienteListaComponent implements OnInit {
  carros = [
    { nome: 'Argo', ano: '2020', marca: 'fiat', cor: 'azul' },
    { nome: 'Gol', ano: '1999', marca: 'volks', cor: 'vermelho' },
  ];
  constructor() {}

  ngOnInit() {}
}

//import { CLIENTES } from './clientes-mock';
//import { Cliente } from './cliente.model';
/*
@Component({
  moduleId: module.id,
  selector: 'clientes-lista',
  templateUrl: 'clientes-lista.component.html',
})
export class ClientesListaComponent {
  //   clientes : Cliente[] = CLIENTES ;
}
*/
