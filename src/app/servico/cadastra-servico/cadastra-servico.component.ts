import { ServicoService } from './../servico.service';
import { ServicoMapper } from './../mapper/servico-mapper';
import { ServicoDTO } from './../dto/servico-dto';
import { ServicoModel } from './../model/servico-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-servico',
  templateUrl: './cadastra-servico.component.html',
  styleUrls: ['./cadastra-servico.component.scss'],
})
export class CadastraServicoComponent implements OnInit {
  servicos: ServicoModel[] = [];
  servico: ServicoDTO = {};
  mapper = new ServicoMapper();

  operacao: Boolean = true;

  servicoDialog: boolean = false;

  constructor(private service: ServicoService ) {}

  ngOnInit(): void {
    this.consultar();
  }

  consultar(){
    this.service.buscar().subscribe((resposta)=>{
      this.servicos = resposta;
    })
  }

  adicionar() {
    this.service.salvar(this.servico).subscribe((resposta) => {
      console.log(resposta);
      this.consultar();
      this.servico = {};
    });
  }

  openNew() {
    this.servico = {};
    this.servicoDialog = true;
  }

  hideDialog() {
    this.servicoDialog = false;
  }

  adicionarItem(){

  }
}
