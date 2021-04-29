import { FormsModule } from '@angular/forms';
import { AutenticacaoRoutes } from './autenticacao.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './autenticacao.component';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';

@NgModule({
  imports: [CommonModule, AutenticacaoRoutes, FormsModule, PasswordModule],
  declarations: [AutenticacaoComponent, LoginComponent],
})
export class AutenticacaoModule {}
