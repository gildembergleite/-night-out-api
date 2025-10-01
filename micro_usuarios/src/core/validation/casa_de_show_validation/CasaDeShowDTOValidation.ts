import { z } from 'zod'

export const casaDeShowDTOValidation = z.object({
    id_usuario : z.string().min(0),
    nome_fantasia : z.string().min(2).max(30),
    cnpj : z.string().regex(/^\d{14}$/, "O CNPJ deve ter 14 caracteres"),
    capacidade : z.string().min(1),
    endereco : z.string().min(5).max(40),
    bairro : z.string().min(5).max(20),
    estado : z.string().min(2).max(15),
    cep : z.string().regex(/^\d{8}$/, "O CEP deve ter 8 caracteres"),
    geo_lat : z.string(),
    geo_lng : z.string()
})

export type CasaDeShowValidatedDTO = z.infer<typeof casaDeShowDTOValidation>