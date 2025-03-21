import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'confirm-transfer',
  standalone: false,
  templateUrl: './confirm-transfer.component.html',
  styleUrl: './confirm-transfer.component.css',
})
export class ConfirmTransferComponent {
  @Input() amount!: string | null;
  @Input() paymentType!: string | null;

  constructor(private router: Router) {}

  navigateReceipt(){
    this.router.navigate(['divitibank-transfer-receipt', this.amount, this.paymentType])
  }

  navigatePrincipal(){
    this.router.navigate(['divitibank-main']);
  }
}
