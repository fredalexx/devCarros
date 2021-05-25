import { VeiculoDTO } from './../../cadastro-veiculo/dto/veiculo-dto';
import { VeiculoService } from './../../cadastro-veiculo/veiculo.service';
import { ServicoService } from './../servico.service';
import { ServicoMapper } from './../mapper/servico-mapper';
import { ServicoDTO } from './../dto/servico-dto';
import { ServicoModel } from './../model/servico-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastra-servico',
  templateUrl: './cadastra-servico.component.html',
  styleUrls: ['./cadastra-servico.component.css'],
})
export class CadastraServicoComponent implements OnInit {
  servicos: ServicoModel[] = [];
  servico: ServicoDTO = {};
  veiculos: VeiculoDTO = {};
  mapper = new ServicoMapper();

  operacao: Boolean = true;

  servicoDialog: boolean = false;
  idVeiculo: number = 0;

  constructor(private service: ServicoService,
    private route: ActivatedRoute, private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.idVeiculo = this.route.snapshot.params['idVeiculo'];
    this.consultar();
  }

  consultar() {
    this.veiculoService.buscarPorId(this.idVeiculo)
      .subscribe(res => {
        this.veiculos = res;
        this.servicos = res.servicoList
      });
  }

  adicionar() {
    this.servico.idVeiculo = this.idVeiculo;
    this.service.salvar(this.servico).subscribe((resposta) => {
      console.log(resposta);
      this.hideDialog();
      this.consultar();
    });
  }

  salvarItem() {
    this.servico.item = this.servico.item;
    this.service.salvar(this.servico).subscribe((resposta) => {
      console.log(resposta);
      this.consultar();
      this.servico.dataCriacao = this.servico.dataCriacao;
    });
  }

  openNew() {

    this.servicoDialog = true;
  }

  hideDialog() {
    this.servicoDialog = false;
  }
}
