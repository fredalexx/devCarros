import { ConfirmationService, MessageService } from 'primeng/api';
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
  loading: boolean = true;

  servicoDialog: boolean = false;
  idVeiculo: number = 0;

  constructor(private service: ServicoService,
    private route: ActivatedRoute,
    private veiculoService: VeiculoService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.idVeiculo = this.route.snapshot.params['idVeiculo'];
    this.loading = true;
    this.consultar();
  }

  editar(dado: ServicoModel) {
    this.servico = this.mapper.converterModelParaDTO(dado);
    this.operacao = false;
  }


  excluir(id: number) {
    this.service.excluir(id).subscribe((resposta) => {
      this.consultar();
      this.servico = {};
    });
    alert('Esse serviço será excluido da Base de dados!');
  }

  consultar() {
    this.veiculoService.buscarPorId(this.idVeiculo)
      .subscribe(res => {
        this.veiculos = res;
        this.servicos = res.servicoList
        console.log(res)
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

  atualizar(dado: ServicoModel) {
    this.editar(dado);
  }

  salvarAlteracao() {
    this.service.atualizar(this.servico).subscribe(() => {
      this.servico = {};
      this.operacao = true;
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
