import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'autenticacao', component: LoginComponent }];

export const AutenticacaoRoutes = RouterModule.forChild(routes);
