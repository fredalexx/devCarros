import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { ProdutoComponent } from './produto/produto.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [PrincipalComponent, ProdutoComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
})
export class HomeModule {}
