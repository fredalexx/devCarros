import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticacaoRoutes } from './autenticacao.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [CommonModule,
    AutenticacaoRoutes,
    FormsModule,
    PasswordModule, ReactiveFormsModule],

  declarations: [LoginComponent,
    CadastroClienteComponent],
})
export class AutenticacaoModule { }


