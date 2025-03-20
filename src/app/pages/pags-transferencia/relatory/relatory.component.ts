import { Component } from '@angular/core';
import { User } from '../../../interfaces/User';
import { Card } from '../../../interfaces/Card';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-relatory',
  standalone: false,
  templateUrl: './relatory.component.html',
  styleUrl: './relatory.component.css',
})
export class RelatoryComponent {
  hideConfirm: boolean = true;

  amount: string | null;
  paymentId: number;

  autor: User = {
    name: 'João Pedro Paulino do Nascimento',
    cpf: '11111111111',
  };

  destin: User = {
    name: 'João Pedro Carvalho de Jesus',
    cpf: '00000000000',
  };

  cartao: Card =
    {
      name: 'JOAO PEDRO PAULINO',
      cvc: '696',
      type: 'Débito',
      number: '0000 0000 0000 0000',
      expireDate: '01/30',
      aprox: 'Sim',
      color: 'blue',
    }

  constructor (private router: Router, private route: ActivatedRoute) {
    this.amount = this.route.snapshot.paramMap.get('amount');
    this.paymentId = Number(this.route.snapshot.paramMap.get('paymentId'));
  }
}
