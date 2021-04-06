import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLoginComponent } from './cadastro-login/cadastro-login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: CadastroLoginComponent },
  { path: 'login/:codigo', component: CadastroLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
