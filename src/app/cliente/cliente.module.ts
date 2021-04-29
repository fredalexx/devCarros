import { TableModule } from 'primeng/table';
import { ClienteRoutes } from './cliente.routing';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ButtonModule } from 'primeng/button';
import { publicDecrypt } from 'crypto';

@NgModule({
  imports: [CommonModule, ClienteRoutes, TableModule, ButtonModule],
  declarations: [
    ClienteComponent,
    ClienteCadastroComponent,
    ClienteDetalheComponent,
    ClienteListaComponent,
  ],
})
export class ClienteModule {}
export class Cliente {
  constructor(
      public id:number,
      public Nome: string,
      public Email : string,
      public Telefone : number,
      public Endereço: string
      public Bairro: string
      public Cidade: string
      public Estado:string

  ){}
}
