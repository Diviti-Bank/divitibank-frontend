import { Component } from '@angular/core';
import { Transfer } from '../../interfaces/Transfer';
import { Card } from '../../interfaces/Card';
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
  extrato: Transfer[] = [
    { type: 'Transferência efetuada', user: 'Loja do Zé', money: -19.6 },
    { type: 'Transferência recebida', user: 'Rafael Pither', money: 40.0 },
    { type: 'Transferência efetuada', user: 'Loja do Zé', money: -19.6 },
    { type: 'Transferência recebida', user: 'Rafael Pither', money: 40.0 },
    { type: 'Transferência efetuada', user: 'Loja do Zé', money: -19.6 },
    { type: 'Transferência recebida', user: 'Rafael Pither', money: 40.0 },
  ];

  cartoes: Card[] = [
    {
      name: 'JOAO PEDRO PAULINO',
      cvc: '696',
      type: 'Débito',
      number: '0000 0000 0000 0000',
      expireDate: '01/30',
      aprox: 'Sim',
      color: 'blue',
    },
    {
      name: 'JOAO PEDRO PAULINO',
      cvc: '969',
      type: 'Crédito',
      number: '1111 1111 1111 1111',
      expireDate: '03/29',
      aprox: 'Não',
      color: 'black',
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
