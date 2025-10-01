import { CasaShow } from "@prisma/client";
import { CasaDeShowDTO } from "../types/casa_de_show_dtos/casaDeShowDTO";

export async function toForm(casadehow: CasaShow): Promise<Partial<CasaDeShowDTO>> {
    return{ 

        nome_fantasia: casadehow.nome_fantasia,
        cnpj: casadehow.cnpj, 
        endereco: casadehow.endereco,
        capacidade: casadehow.capacidade,
        bairro: casadehow.bairro,
        estado: casadehow.estado,            
        cep: casadehow.cep, 
        geo_lat: casadehow.geo_lat,       
        geo_lng: casadehow.geo_lng,  
        usuario: []     

    }   
}

export async function toModel(casadehowDTO: CasaDeShowDTO): Promise<Partial<CasaShow>> {
    return {
        nome_fantasia: casadehowDTO.nome_fantasia,
        cnpj: casadehowDTO.cnpj, 
        endereco: casadehowDTO.endereco,
        capacidade: casadehowDTO.capacidade,
        bairro: casadehowDTO.bairro,
        estado: casadehowDTO.estado,            
        cep: casadehowDTO.cep,
        geo_lat: casadehowDTO.geo_lat,
        geo_lng: casadehowDTO.geo_lng,
        }}