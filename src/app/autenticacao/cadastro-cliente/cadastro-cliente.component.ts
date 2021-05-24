import { ClienteMapper } from './mapper/cliente-mapper';
import { ClienteDTO } from './dto/ClienteDTO';
import { ClienteModel } from './model/ClienteModel';
import { ClienteService } from './cliente.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  clientes: ClienteModel[] = [];
  cliente: ClienteDTO = {};
  mapper = new ClienteMapper();

  form = this.formBuilder.group({
    email: [''],
    senha: [''],
    nome: ['']
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private service: ClienteService
  ) { }


  ngOnInit(): void {
    //this.consultar();
  }

  adicionar() {
    console.log(this.form.value);
    this.service.salvar(this.cliente).subscribe(resposta => {
      console.log(resposta);
      this.cliente = {};
    });
  }
}