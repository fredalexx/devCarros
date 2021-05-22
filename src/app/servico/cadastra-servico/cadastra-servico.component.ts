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
  styleUrls: ['./cadastra-servico.component.scss'],
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
    // this.consultar();
    this.idVeiculo = this.route.snapshot.params['idVeiculo'];
    this.veiculoService.buscarPorId(this.idVeiculo)
      .subscribe(res => this.veiculos = res);

  }

  consultar() {
    this.service.buscar().subscribe((resposta) => {
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

  adicionarItem() {

  }
}
