import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { CarouselModule } from 'primeng/carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PrincipalComponent],
  imports: [CommonModule,
    HomeRoutingModule,
    CarouselModule,
    SharedModule,
    MatTabsModule,
    MatCardModule
  ],
})
export class HomeModule { }
