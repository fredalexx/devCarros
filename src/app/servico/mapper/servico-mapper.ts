import { ServicoModel } from '../model/servico-model';
import { ServicoDTO } from './../dto/servico-dto';
export class ServicoMapper {
  converterDTOParaModel(dto: ServicoDTO): ServicoModel {
    return {
      id: dto.id ? dto.id : 0,
      os: dto.os ? dto.os : '',
      mecanica: dto.mecanica ? dto.mecanica : '',
      item: dto.item ? dto.item : '',
      valor: dto.valor ? dto.valor : '',
      dataCriacao: new Date(),
    };
  }

  converterModelParaDTO(model: ServicoModel): ServicoDTO {
    return {
      id: model.id,
      os: model.os,
      mecanica: model.mecanica,
      item: model.item,
      valor: model.valor,
    };
  }
}
