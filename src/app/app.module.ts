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
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroLoginComponent,
    CadastroServicoComponent,
  ],
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
  ],
  providers: [MessageService, Title, ConfirmationService, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
