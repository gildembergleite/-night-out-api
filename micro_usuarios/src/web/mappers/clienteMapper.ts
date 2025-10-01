import { Cliente } from "@prisma/client"
import { ClienteDTO } from "../types/cliente_dtos/clienteDTO"

export async function toForm(cliente: Cliente): Promise<Partial<ClienteDTO>> {
    return{
        apelido: cliente.apelido ?? undefined,
        preferencias: cliente.preferencias ?? undefined,
        data_nascimento: cliente.data_nascimento ?? undefined,
        usuario: []
    }










}