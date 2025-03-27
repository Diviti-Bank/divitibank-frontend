import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receipt',
  standalone: false,
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css',
})
export class ReceiptComponent {
  amount!: string | null;
  paymentType!: string | null;

  name1: string = 'João Pedro Paulino do Nascimento';
    cpf1: string = '00000000000'

    name2: string = 'João Pedro Carvalho de Jesus';
    cpf2: string = '11111111111'

  date = {
    day: "26/02/2025",
    hour: "23:15:31"
  }

  constructor(private router: Router, private route: ActivatedRoute) {
    this.amount = this.route.snapshot.paramMap.get('amount');
    this.paymentType = this.route.snapshot.paramMap.get('paymentType');
  }
}
