
import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FileUploadModule } from 'primeng/fileupload';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AutenticacaoModule } from './autenticacao/autenticacao.module';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { ServicoModule } from './servico/servico.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroVeiculoComponent
  ],
  exports: [CadastroVeiculoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    InputMaskModule,
    DropdownModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    HomeModule,
    AutenticacaoModule,
    ServicoModule,
    SharedModule,
  ],
  providers: [MessageService, Title, ConfirmationService, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
