import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../../../Interfaces/Card';
import { TransferService } from '../../../services/transfer/transfer.service';
import { LoginService } from '../../../services/logCad/login/login.service';

@Component({
  selector: 'app-payment-method',
  standalone: false,
  templateUrl: './payment-method.component.html',
  styleUrl: './payment-method.component.css'
})
export class PaymentMethodComponent {
  cpfRemetente!: string;
  amount!: number;
  cartoes!: Card[];
  selectedOption!: string;

  constructor (private router: Router, private service: TransferService, private loginService: LoginService) {}

  ngOnInit(){
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cartoes = user.cartoes;

      this.service.getDinheiro().subscribe((dinheiro) => {
        this.amount = dinheiro;
      });
    });
  }

  isSelected(value: string): boolean {
    return this.selectedOption === value;
  }

  navigateInsertAmount(){
    this.router.navigate(['divitibank-transfer-insertAmount']);
  }

  navigateRelatory(){
    this.service.setMetodoPagamento(this.selectedOption);
    this.router.navigate(['divitibank-transfer-relatory'])
  }
}
