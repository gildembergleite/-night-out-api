import { UsuarioDTO } from "../usuario_dtos/usuarioDTO";

export interface CasaDeShowDTO {
  id_usuario: string;
  nome_fantasia: string;
  cnpj: string;
  capacidade: string;
  endereco: string;
  bairro: string;
  estado: string;
  cep: string;
  geo_lat: string;
  geo_lng: string;

  usuario: UsuarioDTO[];
}
