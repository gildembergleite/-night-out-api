import { z } from 'zod'

export const administradorDTOValidation = z.object({
    id_usuario : z.string().min(0),
    cargo : z.string().min(2).max(50),
    permissao_nivel : z.string(),
    createdAt : z.date(),
    updatedAt : z.date()
})

export type AdministradorValidatedDTO = z.infer<typeof administradorDTOValidation>