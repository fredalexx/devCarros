import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  form = this.formBuilder.group({
    email: [],
    senha: [],
  });

  constructor(
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

}
