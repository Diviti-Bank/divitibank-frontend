import { Component } from '@angular/core';
import { Transfer } from '../../Interfaces/transfer';
import { Card } from '../../Interfaces/card';

@Component({
  selector: 'principal',
  standalone: false,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css',
})
export class PrincipalComponent {
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
  ];
}
