import { CadastroVeiculoComponent } from './../cadastro-veiculo/cadastro-veiculo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraServicoComponent } from '../servico/cadastra-servico/cadastra-servico.component';

const routes: Routes = [
  { path: 'cadastrar', component: CadastroVeiculoComponent },
  { path: 'veiculo', component: CadastroVeiculoComponent },
  { path: 'servico', component: CadastraServicoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {}
