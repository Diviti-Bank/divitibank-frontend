import { Transfer } from "./Transfer"

export interface Card {
    status: string,
    credito: number,
    tipo_cartao: string,
    cor_cartao: string,
    aproximacao: boolean,
    fatura: number,
    extrato: Transfer[] | null;
    cvc: number,
    nome_cartao: string,
    numero_cartao: string,
    validade: string
}
