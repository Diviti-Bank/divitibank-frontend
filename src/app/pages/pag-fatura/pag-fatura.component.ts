import { Component } from '@angular/core';
import { Transfer } from '../../Interfaces/Transfer';
import { Router } from '@angular/router';
import { CardService } from '../../services/card/card.service';
import { LoginService } from '../../services/logCad/login/login.service';
import { Card } from '../../Interfaces/Card';

@Component({
  selector: 'app-pag-fatura',
  standalone: false,
  templateUrl: './pag-fatura.component.html',
  styleUrl: './pag-fatura.component.css'
})
export class PagFaturaComponent {
  cpf!: string;
  cartao!: Card;

  constructor(private router: Router, private service: CardService, private loginService: LoginService) {}

  ngOnInit(){
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cpf = user.cpf;
      console.log(this.cpf);
    });

    this.service.getCartao().subscribe((cartao) => {
      this.cartao = cartao;
      console.log(this.cartao);
    });
  }

  pagarFatura(){
    this.service.pagarFatura(this.cpf, this.cartao.cor_cartao).subscribe(
      (res) => {
        this.router.navigate(['/divitibank-success', 'Fatura paga com sucesso!', false, 'Voltar', '/divitibank-cards']);
      },
      (err) => {
        this.router.navigate(['/divitibank-error', 'Ocorreu um erro ao tentar pagar a fatura.', false]);
      }
    )
  }

  navigateCards(){
    this.router.navigate(['divitibank-cards'])
  }
}
