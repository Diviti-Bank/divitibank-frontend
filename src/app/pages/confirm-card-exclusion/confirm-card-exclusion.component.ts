import { Component } from '@angular/core';
import { Card } from '../../Interfaces/Card';
import { Router } from '@angular/router';
import { CardService } from '../../services/card/card.service';
import { LoginService } from '../../services/logCad/login/login.service';

@Component({
  selector: 'app-confirm-card-exclusion',
  standalone: false,
  templateUrl: './confirm-card-exclusion.component.html',
  styleUrl: './confirm-card-exclusion.component.css'
})
export class ConfirmCardExclusionComponent {
  cpf!: string;
  cartao!: Card;

  constructor(private router: Router, private service: CardService, private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cpf = user.cpf;
    })

    this.service.getCartao().subscribe((cartao) => {
      this.cartao = cartao;
    });
  }

  excluirCartao(){
    this.service.pagarFatura(this.cpf, this.cartao.cor_cartao).subscribe(
      (res) => {
        this.service.excluirCartao(this.cpf, this.cartao.cor_cartao).subscribe(
          (res) => {
            this.router.navigate(['/divitibank-success', 'Cartão excluído com sucesso!', false, 'Voltar', '/divitibank-cards']);
          },
          (err) => {
            this.router.navigate(['/divitibank-error', 'Ocorreu um erro na exclusão do cartão.', false]);
          }
        )
      },
      (err) => {
        this.router.navigate(['/divitibank-error', 'Ocorreu um erro ao pagar a fatura do cartão.', false]);
      }
    )
  }

  navigateCards() {
    this.router.navigate(['/divitibank-cards']);
  }
}
