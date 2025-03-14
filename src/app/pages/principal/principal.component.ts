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
      color: 1,
    },
    {
      name: 'JOAO PEDRO PAULINO',
      cvc: '969',
      type: 'Crédito',
      number: '1111 1111 1111 1111',
      expireDate: '03/29',
      aprox: 'Não',
      color: 2,
    },
  ];

  navigateExtract() {
    this.router.navigate(['divitibank-extract']);
  }
}
