import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-servico',
  templateUrl: './cadastra-servico.component.html',
  styleUrls: ['./cadastra-servico.component.scss'],
})
export class CadastraServicoComponent implements OnInit {
  cliente: any = {};

  operacao: boolean = true;

  servicoDialog: boolean = false;

  constructor() {}

  ngOnInit() {}

  openNew() {
    this.cliente = {};
    this.servicoDialog = true;
  }

  hideDialog() {
    this.servicoDialog = false;
  }
}
