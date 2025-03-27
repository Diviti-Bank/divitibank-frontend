import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../../Interfaces/Card';

@Component({
  selector: 'app-payment-method',
  standalone: false,
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
  amount: string | null;
  selectedOption!: string;

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

  constructor (private router: Router, private route: ActivatedRoute) {
    this.amount = this.route.snapshot.paramMap.get('amount');
  }

  isSelected(value: string): boolean {
    return this.selectedOption === value;
  }

  navigateRelatory(){
    this.router.navigate(['divitibank-transfer-relatory', this.amount, this.selectedOption])
  }
}
