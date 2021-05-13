import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CadastraServicoComponent } from './cadastra-servico/cadastra-servico.component';
import { ListaServicoComponent } from './lista-servico/lista-servico.component';
import { ServicoRoutes } from './servico.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';

@NgModule({
  imports: [
    CommonModule,
    ServicoRoutes,
    FormsModule,
    TableModule,
    ButtonModule,
  ],
  declarations: [
    ServicoComponent,
    ListaServicoComponent,
    CadastraServicoComponent,
  ],
})
export class ServicoModule {}
