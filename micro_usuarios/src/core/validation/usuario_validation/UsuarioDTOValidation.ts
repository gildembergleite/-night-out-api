import { z } from 'zod'

export const usuarioDTOValidation = z.object({
    id_usuario : z.string().min(0),
    nome : z.string().min(3).max(40),
    email : z.string().min(11),
    senha_hash : z.string().min(6),
    telefone : z.string().regex(/^\d{9}$/, "O número de celular precisa ter 9 dígitos")
})

export type UsuarioValidatedDTO = z.infer<typeof usuarioDTOValidation>