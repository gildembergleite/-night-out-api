import { ArtistaDTO } from "../types/artista_dtos/artistaDTO";
import { Artista } from "@prisma/client";
export async function toForm(artista: Artista): Promise<Partial<ArtistaDTO>> {
    
    return{
        nome_artista: artista.nome_artista,
        genero_musical: artista.genero_musical,
        cache_min: artista.cache_min,
        descricao: artista.descricao ?? "",
        portifolio: artista.portifolio ?? "",
        verificado: artista.verificado,
         usuario: []
    };
}
export async function toModel(artistaDTO: ArtistaDTO): Promise<Partial<Artista>> {
    return {
        nome_artista: artistaDTO.nome_artista,
        genero_musical: artistaDTO.genero_musical,
        cache_min: artistaDTO.cache_min,
        descricao: artistaDTO.descricao,
        portifolio: artistaDTO.portifolio,
        verificado: artistaDTO.verificado,
    };
}
