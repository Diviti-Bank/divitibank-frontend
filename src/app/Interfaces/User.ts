import { Card } from "../Interfaces/Card";
import { Transfer } from "../Interfaces/Transfer";

export interface User {
    nome: string,
    sobrenome: string,
    cpf: string,
    email: string,
    senha: string,
    saldo: number,
    cartoes: Card[],
    extrato: Transfer[]
}
