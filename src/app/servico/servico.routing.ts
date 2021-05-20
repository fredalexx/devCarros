import { CadastraServicoComponent } from './cadastra-servico/cadastra-servico.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: "servicos/:idVeiculo/cadastro", component: CadastraServicoComponent},
  { path: "servicos/cadastro", component: CadastraServicoComponent}
];

export const ServicoRoutes = RouterModule.forChild(routes);
