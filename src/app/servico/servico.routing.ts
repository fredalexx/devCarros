import { CadastraServicoComponent } from './cadastra-servico/cadastra-servico.component';
import { ListaServicoComponent } from './lista-servico/lista-servico.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "servicos", component: ListaServicoComponent},
  { path: "servicos/cadastro", component: CadastraServicoComponent


  }
];

export const ServicoRoutes = RouterModule.forChild(routes);
