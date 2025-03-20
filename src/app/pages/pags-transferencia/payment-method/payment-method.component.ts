import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../../interfaces/Card';

@Component({
  selector: 'app-payment-method',
  standalone: false,
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
  amount: string | null;
  selectedOption!: number;

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

  constructor (private router: Router, private route: ActivatedRoute) {
    this.amount = this.route.snapshot.paramMap.get('amount');
  }

  isSelected(value: number): boolean {
    return this.selectedOption === value;
  }

  navigateRelatory(){
    this.router.navigate(['divitibank-transfer-relatory', this.amount, this.selectedOption])
  }
}
