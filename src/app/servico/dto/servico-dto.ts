import { Data } from "@angular/router";

export interface ServicoDTO {
  id?: number;
  os?: string;
  mecanica?: string;
  item?: string;
  valor?: number;
  idVeiculo?: number;
  dataCriacao?: Date;
}
