import { Component } from '@angular/core';
import { Transfer } from '../../Interfaces/Transfer';
import { Card } from '../../Interfaces/Card';
import { Router } from '@angular/router';

@Component({
  selector: 'principal',
  standalone: false,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
  constructor(private router: Router) {}

  verSaldo: boolean = false;
  saldo: number = 6158.89;

  data1: Date = new Date(2025, 4, 14)
  data2: Date = new Date(2025, 1, 2)

  extrato: Transfer[] = [
    { tipo: 'Transferência efetuada', origem: 'Loja do Zé', quantia: -19.6, data: this.data1 },
    { tipo: 'Transferência recebida', origem: 'Rafael Pither', quantia: 40.0, data: this.data2  },
    { tipo: 'Transferência efetuada', origem: 'Loja do Zé', quantia: -19.6, data: this.data1 },
    { tipo: 'Transferência recebida', origem: 'Rafael Pither', quantia: 40.0, data: this.data2  },
    { tipo: 'Transferência efetuada', origem: 'Loja do Zé', quantia: -19.6, data: this.data1 },
    { tipo: 'Transferência recebida', origem: 'Rafael Pither', quantia: 40.0, data: this.data2  },
  ];

  cartoes: Card[] = [
    {
      status: 'ativo',
      credito: 0,
      tipo_cartao: 'Débito',
      cor_cartao: 'blue',
      aproximacao: true,
      cvc: 0o34,
      nome_cartao: 'JOÃO PEDRO PAULINO',
      numero_cartao: '0000 0000 0000 0000',
      validade: '01/30'
    },
    {
      status: 'ativo',
      credito: 50,
      tipo_cartao: 'Crédito',
      cor_cartao: 'black',
      aproximacao: false,
      cvc: 342,
      nome_cartao: 'JOÃO PEDRO PAULINO',
      numero_cartao: '1111 1111 1111 1111',
      validade: '02/29'
    },
  ];

  navigateExtract() {
    this.router.navigate(['divitibank-extract']);
  }

  navigateCartoes() {
    this.router.navigate(['divitibank-cards']);
  }

  navigateTransferencia() {
    this.router.navigate(['divitibank-transfer-keyPage']);
  }
}
