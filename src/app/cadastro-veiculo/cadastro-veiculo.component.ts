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

  operacao: Boolean = true;

  constructor(private service: VeiculoService) {}

  ngOnInit(): void {
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
      console.log(resposta);
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
}
