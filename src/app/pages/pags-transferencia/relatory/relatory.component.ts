import { Component } from '@angular/core';
import { Card } from '../../../Interfaces/Card';
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
  paymentType: string | null;

  name1: string = 'João Pedro Paulino do Nascimento';
  cpf1: string = '00000000000';

  name2: string = 'João Pedro Carvalho de Jesus';
  cpf2: string = '11111111111';

  cartao: Card = {
    status: 'ativo',
    credito: 0,
    tipo_cartao: 'Débito',
    cor_cartao: 'blue',
    aproximacao: true,
    cvc: 0o34,
    nome_cartao: 'JOÃO PEDRO PAULINO',
    numero_cartao: '0000 0000 0000 0000',
    validade: '01/30',
  };

  constructor(private router: Router, private route: ActivatedRoute) {
    this.amount = this.route.snapshot.paramMap.get('amount');
    this.paymentType = this.route.snapshot.paramMap.get('paymentType');
  }
}
