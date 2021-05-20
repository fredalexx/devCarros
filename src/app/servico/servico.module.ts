
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { CadastraServicoComponent } from './cadastra-servico/cadastra-servico.component';
import { ServicoRoutes } from './servico.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicoComponent } from './servico.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ServicoRoutes,
    FormsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextModule,
    SharedModule

  ],
  declarations: [
    ServicoComponent,
    CadastraServicoComponent,
  ],
})
export class ServicoModule { }
