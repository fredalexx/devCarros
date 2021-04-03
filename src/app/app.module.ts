import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroLoginComponent,
    CadastroServicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
