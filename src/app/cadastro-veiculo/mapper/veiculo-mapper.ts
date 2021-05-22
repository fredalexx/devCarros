import { VeiculoModel } from './../model/veiculo-model';
import { VeiculoDTO } from './../dto/veiculo-dto';

export class VeiculoMapper {
  converterDTOParaModel(dto: VeiculoDTO): VeiculoModel {
    return {
      id: dto.id ? dto.id : 0,
      marca: dto.marca ? dto.marca : '',
      modelo: dto.modelo ? dto.modelo : '',
      cor: dto.cor ? dto.cor : '',
      placa: dto.placa ? dto.placa : '',
      ano: dto.ano ? dto.ano : '',
      servicoList: dto.servicoList ? dto.servicoList : []
    };
  }

  converterModelParaDTO(model: VeiculoModel): VeiculoDTO {
    return {
      id: model.id,
      marca: model.marca,
      modelo: model.modelo,
      cor: model.cor,
      placa: model.placa,
      ano: model.ano,
      servicoList: model.servicoList
    };
  }
}
