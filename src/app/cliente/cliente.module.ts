import { TableModule } from 'primeng/table';
import { ClienteRoutes } from './cliente.routing';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { ButtonModule } from 'primeng/button';

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
