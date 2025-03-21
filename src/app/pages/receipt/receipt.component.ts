import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-receipt',
  standalone: false,
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css',
})
export class ReceiptComponent {
  amount!: string | null;
  paymentType!: string | null;

  autor: User = {
    name: 'João Pedro Paulino do Nascimento',
    cpf: '11111111111',
  };

  destin: User = {
    name: 'João Pedro Carvalho de Jesus',
    cpf: '00000000000',
  };

  date = {
    day: "26/02/2025",
    hour: "23:15:31"
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.amount = this.route.snapshot.paramMap.get('amount');
    this.paymentType = this.route.snapshot.paramMap.get('paymentType');
  }
}
