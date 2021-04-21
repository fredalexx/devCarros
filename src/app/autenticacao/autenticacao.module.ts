import { AutenticacaoRoutes } from './autenticacao.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutenticacaoComponent } from './autenticacao.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, AutenticacaoRoutes],
  declarations: [AutenticacaoComponent, LoginComponent],
})
export class AutenticacaoModule {}
