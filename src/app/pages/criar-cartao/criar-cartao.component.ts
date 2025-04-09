import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CardService } from '../../services/card/card.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/logCad/login/login.service';
import { Card } from '../../Interfaces/Card';

@Component({
  selector: 'app-criar-cartao',
  standalone: false,
  templateUrl: './criar-cartao.component.html',
  styleUrl: './criar-cartao.component.css',
})
export class CriarCartaoComponent implements OnInit {
  cpf!: string;

  buttonView: boolean = true;

  cartoes!: Card[];
  cartaoAtual!: Card;

  status: string = 'ativo';
  credito: number = 100;
  tipoCartao!: string;
  corCartao!: string;
  aproximacao!: boolean;
  cvc!: number;
  @ViewChild('name') nome!: ElementRef;
  nomeCartao!: string;
  numeroCartao!: string;
  validade!: string;

  constructor(
    private router: Router,
    private service: CardService,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.cpf = user.cpf;
      this.cartoes = user.cartoes;
      if (this.cartoes.length > 0) { this.cartaoAtual = this.cartoes[0] }
    });
  }

  cadastrar() {
    this.buttonView = !this.buttonView;
    if (this.cartoes.length == 0) {
      if (
        this.tipoCartao &&
        this.corCartao &&
        this.aproximacao != null &&
        this.nome.nativeElement.value != ''
      ) {
        this.cvc = this.gerarCvc();
        this.nomeCartao = this.nome.nativeElement.value.toUpperCase();
        this.numeroCartao = this.gerarNumeroCartao();
        this.validade = this.gerarValidade();
        

        const card: Card = this.gerarCartao();

        this.service.cadastrarCartao(this.cpf, card).subscribe(
          (res) => {
            console.log('Cadastro de cartão realizado com sucesso:', res);
            this.router.navigate(['/divitibank-success', 'Cartão criado com sucesso!', false, 'Voltar', 'divitibank-cards']);
          },
          (erro) => {
            console.error('Erro no cadastro:', erro);
            this.router.navigate(['/divitibank-error', 'Ocorreu um erro na criação do cartão.', false]);
          }
        );
      } else {
        this.router.navigate(['/divitibank-error', 'Preencha todas as opções.', false]);
      }
    } else if (this.cartoes.length == 1){
      if (
        this.aproximacao != null &&
        this.nome.nativeElement.value != ''
      ) {
        this.cvc = this.gerarCvc();
        this.nomeCartao = this.nome.nativeElement.value.toUpperCase();
        this.numeroCartao = this.gerarNumeroCartao();
        this.validade = this.gerarValidade();

        if (this.cartaoAtual.cor_cartao == 'blue') {
          this.corCartao = 'black';
        }
        if (this.cartaoAtual.cor_cartao == 'black') {
          this.corCartao = 'blue';
        }

        if(this.cartaoAtual.tipo_cartao == 'Crédito') {
          this.tipoCartao = 'Débito';
        }
        if(this.cartaoAtual.tipo_cartao == 'Débito') {
          this.tipoCartao = 'Crédito';
        }

        const card: Card = this.gerarCartao();

        this.service.cadastrarCartao(this.cpf, card).subscribe(
          (res) => {
            console.log('Cadastro de cartão realizado com sucesso:', res);
            this.router.navigate(['/divitibank-success', 'Cartão criado com sucesso!', false, 'Voltar', 'divitibank-cards']);
          },
          (erro) => {
            console.error('Erro no cadastro:', erro);
            this.router.navigate(['/divitibank-error', 'Ocorreu um erro na criação do cartão.', false]);
          }
        );
      } else {
        this.router.navigate(['/divitibank-error', 'Preencha todas as opções.', false]);
      }
    }
  }

  gerarCvc(): number {
    return Math.floor(100 + Math.random() * 900);
  }

  gerarNumeroCartao(): string {
    const numeroCartao: string = Math.floor(
      1000000000000000 + Math.random() * 9000000000000000
    ).toString();
    return numeroCartao.replace(/(\d{4})/g, '$1 ').trim();
  }

  gerarValidade() {
    const mes = Math.floor(1 + Math.random() * 12)
      .toString()
      .padStart(2, '0');
    const ano = Math.floor(28 + Math.random() * 8).toString();

    return `${mes}/${ano}`;
  }

  gerarCartao(): Card {
    if(this.tipoCartao == 'Crédito'){
      const card: Card = {
        status: this.status,
        credito: this.credito,
        tipo_cartao: this.tipoCartao,
        cor_cartao: this.corCartao,
        aproximacao: this.aproximacao,
        fatura: 0,
        extrato: [],
        cvc: this.cvc,
        nome_cartao: this.nomeCartao,
        numero_cartao: this.numeroCartao,
        validade: this.validade,
      };

      return card
    } else {
      const card: Card = {
        status: this.status,
        credito: this.credito,
        tipo_cartao: this.tipoCartao,
        cor_cartao: this.corCartao,
        aproximacao: this.aproximacao,
        fatura: 0,
        extrato: null,
        cvc: this.cvc,
        nome_cartao: this.nomeCartao,
        numero_cartao: this.numeroCartao,
        validade: this.validade,
      };

      return card;
    }
  }

  navigatePrincipal() {
    this.router.navigate(['/divitibank-main']);
  }
}
