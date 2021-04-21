import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { Routes, RouterModule } from '@angular/router';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

const routes: Routes = [
  { path: 'clientes', component: ClienteListaComponent },
  { path: 'clientes/cadastro', component: ClienteCadastroComponent },
  { path: 'clientes/detalhe', component: ClienteDetalheComponent },
];

export const ClienteRoutes = RouterModule.forChild(routes);
