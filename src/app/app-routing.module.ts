import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { CadastroServicoComponent } from './cadastro-servico/cadastro-servico.component';
import { CadastroClienteComponent } from './cadastro-cliente/cadastro-cliente.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: CadastroLoginComponent },
  { path: 'login/:codigo', component: CadastroLoginComponent },
  { path: 'cliente', component: CadastroClienteComponent },
  { path: 'servico', component: CadastroServicoComponent },
  { path: 'veiculo', component: CadastroVeiculoComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
