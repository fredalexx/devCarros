import { ConfirmationService, MessageService } from 'primeng/api';
import { VeiculoService } from './veiculo.service';
import { VeiculoMapper } from './mapper/veiculo-mapper';
import { VeiculoDTO } from './dto/veiculo-dto';
import { VeiculoModel } from './model/veiculo-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css'],
})
export class CadastroVeiculoComponent implements OnInit {
  veiculos: VeiculoModel[] = [];
  veiculo: VeiculoDTO = {};
  mapper = new VeiculoMapper();
  loading: boolean = true;

  operacao: Boolean = true;

  constructor(
    private service: VeiculoService,
    private confirmarService: ConfirmationService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.loading = true;
    this.consultar();
  }

  consultar() {
    //não é necessário ter o mesmo nome do método do service
    this.service.buscar().subscribe((resposta) => {
      this.veiculos = resposta;
    });
  }

  adicionar() {
    this.service.salvar(this.veiculo).subscribe((resposta) => {
      this.consultar();
      this.veiculo = {};
    });
  }

  editar(dado: VeiculoModel) {
    this.veiculo = this.mapper.converterModelParaDTO(dado);
    this.operacao = false;
  }

  atualizar() {
    this.service.atualizar(this.veiculo).subscribe(() => {
      this.veiculo = {};
      this.operacao = true;
      this.consultar();
    });
  }

  excluir(dado: VeiculoDTO) {
    this.confirmarService.confirm({
      message: 'Tem certeza que deseja excluir este cliente?',
      accept: () => {
        this.service.excluir(dado).subscribe(resposta => {
          this.messageService.add(
            {
              key: 'toast',
              severity: 'success',
              summary: 'CLIENTE',
              detail: 'excluído com sucesso!'
            });
        });
      }
    });
  }
}
