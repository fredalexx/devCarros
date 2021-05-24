import { ClienteDTO } from './../dto/ClienteDTO';
import { ClienteModel } from './../model/ClienteModel';
export class ClienteMapper {

    converterDTOParaModel(dto: ClienteDTO): ClienteModel {
        return {
            nomeCompleto: dto.nomeCompleto ? dto.nomeCompleto : '',
            email: dto.email ? dto.email : '',
            senha: dto.senha ? dto.senha : ''
        };
    }

    converterModelParaDTO(model: ClienteModel): ClienteDTO {
        return {
            nomeCompleto: model.nomeCompleto,
            email: model.email,
            senha: model.senha
        };
    }
}