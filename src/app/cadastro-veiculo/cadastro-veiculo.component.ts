import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent implements OnInit {

  cliente: any = {
    id: "",
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: "",
    rg: "",
    endereco: {
      cep: "",
      logradouro: "",
      complemento: "",
      numero: "",
      bairro: "",
      estado: {
          id: "",
          nome: "",
          cidade: {
              id: "",
              nome: ""
          }
      }
    },
    dataNasc: ""
  };  

  estados: any[] = [];
  estado: any;
  cidades: any[] = [];
  cidade: any; 
  codigoCliente: any;
  
  operacao: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
