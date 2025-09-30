import { z } from 'zod'

export const artistaDTOValidation = z.object({
    id_usuario : z.string().min(0),
    nome_artista : z.string().min(3).max(30),
    genero_musical : z.string().min(3).max(25),
    cache_min : z.string(),
    descricao : z.string().min(5).max(350),
    portifolio : z.string(),
    verificado : z.boolean(),
    createdAt : z.date(),
    updatedAt : z.date()
})

export type ArtistaValidatedDTO = z.infer<typeof artistaDTOValidation>