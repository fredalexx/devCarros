import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css'],
})
export class CadastroVeiculoComponent implements OnInit {
  cliente: any = {};
  operacao: boolean = true;
  constructor() {}

  ngOnInit() {}
}
