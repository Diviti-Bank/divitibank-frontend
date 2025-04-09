import { Component } from '@angular/core';
import { Card } from '../../Interfaces/Card';
import { LoginService } from '../../services/logCad/login/login.service';
import { Router } from '@angular/router';
import { CardService } from '../../services/card/card.service';

@Component({
  selector: 'app-pag-cartoes',
  standalone: false,
  templateUrl: './pag-cartoes.component.html',
  styleUrl: './pag-cartoes.component.css',
})
export class PagCartoesComponent {
  clickableExclude: boolean = true;
  cardOne: boolean = true;
  cartoes!: Card[];
  cpf!: string;

  constructor(
    private router: Router,
    private service: CardService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cartoes = user.cartoes;
      this.cpf = user.cpf;
    });
  }

  changeCard() {
    if (this.cartoes.length == 1) {
      null;
    } else {
      this.cardOne = !this.cardOne;
    }
  }

  excluirCartao(cartao: Card) {
    this.service.setCartao(cartao);
    this.router.navigate(['/divitibank-confirmCardExclusion']);
  }

  navigatePrincipal() {
    this.router.navigate(['/divitibank-main']);
  }

  navigateCriarCartao() {
    this.router.navigate(['/divitibank-createCard']);
  }

  navigatePagarFatura(cartao: Card) {
    this.service.setCartao(cartao);
    this.router.navigate(['/divitibank-invoicePayment']);
  }
}
