import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TransferService } from '../../services/transfer/transfer.service';
import { Receipt } from '../../Interfaces/Receipt';
import { User } from '../../Interfaces/User';
import { LoginService } from '../../services/logCad/login/login.service';

@Component({
  selector: 'app-receipt',
  standalone: false,
  templateUrl: './receipt.component.html',
  styleUrl: './receipt.component.css',
})
export class ReceiptComponent {
  remetente!: User;
  destinatario!: User;
  date!: string;
  hour!: string;

  dinheiro!: number;

  constructor(private router: Router, private service: TransferService, private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.remetente = user;
      console.log(this.remetente)
    })

    this.service.getDestino().subscribe((user) => {
      this.destinatario = user;
      console.log(this.destinatario)
    })

    this.service.getDinheiro().subscribe((dinheiro) => {
      this.dinheiro = dinheiro;
      console.log(dinheiro)
    })

    const data = new Date();

    this.date = data.toLocaleDateString("pt-BR");
    this.hour = data.toLocaleTimeString("pt-BR");

  }

  navigatePrincipal(){
    this.router.navigate(['divitibank-main']);
  }
}
