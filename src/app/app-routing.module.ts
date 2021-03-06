import { HomeModule } from './home/home.module';
import { ServicoComponent } from './servico/servico.component';
import { LoginComponent } from './autenticacao/login/login.component';
import { PrincipalComponent } from './home/principal/principal.component';
import { CadastroVeiculoComponent } from './cadastro-veiculo/cadastro-veiculo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'veiculo', component: CadastroVeiculoComponent },
  { path: 'login', component: LoginComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
