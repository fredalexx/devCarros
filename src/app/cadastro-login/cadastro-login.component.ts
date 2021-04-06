import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cadastro-login',
  templateUrl: './cadastro-login.component.html',
  styleUrls: ['./cadastro-login.component.css'],
})
export class CadastroLoginComponent implements OnInit {
  cliente: any = {
    id: '',
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    cpf: '',
    rg: '',
    endereco: {
      cep: '',
      logradouro: '',
      complemento: '',
      numero: '',
      bairro: '',
      estado: {
        id: '',
        nome: '',
        cidade: {
          id: '',
          nome: '',
        },
      },
    },
    dataNasc: '',
  };

  estados: any[] = [];
  estado: any;
  cidades: any[] = [];
  cidade: any;
  codigoCliente: any;

  operacao: boolean = true;

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Novo Cadastro');
  }

  cadastrarOuAtualizar() {
    if (this.operacao) {
      this.cadastrar();
    } else {
      this.atualizar();
    }
  }

  cadastrar() {}

  atualizar() {}

  listarCidades() {}
}
