import { Component } from '@angular/core';
import { Card } from '../../../Interfaces/Card';
import { ActivatedRoute, Router } from '@angular/router';
import { TransferService } from '../../../services/transfer/transfer.service';
import { LoginService } from '../../../services/logCad/login/login.service';

@Component({
  selector: 'app-relatory',
  standalone: false,
  templateUrl: './relatory.component.html',
  styleUrl: './relatory.component.css',
})
export class RelatoryComponent {
  hideConfirm: boolean = true;

  amount!: number;
  paymentType!: string;

  nomeRemetente!: string;
  sobrenomeRemetente!: string;
  cpfRemetente!: string;

  nomeDestino!: string;
  sobrenomeDestino!: string;
  cpfDestino!: string;

  constructor(private router: Router, private service: TransferService, private loginService: LoginService) {}

  ngOnInit(){
    this.service.getDinheiro().subscribe((dinheiro) => {
      this.amount = dinheiro;
    });

    this.service.getMetodoPagamento().subscribe((metodo) => {
      this.paymentType = metodo;
    });

    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.nomeRemetente = user.nome;
      this.sobrenomeRemetente = user.sobrenome;
      this.cpfRemetente = user.cpf;
    });

    this.service.getDestino().subscribe((destino) => {
      this.nomeDestino = destino.nome;
      this.sobrenomeDestino = destino.sobrenome;
      this.cpfDestino = destino.cpf;
    })
  }

  navigatePaymentMethod(){
    this.router.navigate(['divitibank-transfer-paymentMethod']);
  }
}
