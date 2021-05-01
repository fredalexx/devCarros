import { CadastraServicoComponent } from './cadastra-servico/cadastra-servico.component';
import { ListaServicoComponent } from './lista-servico/lista-servico.component';
import { ServicoRoutes } from './servico.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';

@NgModule({
  imports: [
    CommonModule,
    ServicoRoutes
  ],
  declarations: [
    ServicoComponent,
    ListaServicoComponent,
    CadastraServicoComponent
  ]
})
export class ServicoModule { }
