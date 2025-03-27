import { Component } from '@angular/core';
import { Card } from '../../Interfaces/Card';

@Component({
  selector: 'app-pag-cartoes',
  standalone: false,
  templateUrl: './pag-cartoes.component.html',
  styleUrl: './pag-cartoes.component.css'
})
export class PagCartoesComponent {
  cardOne: boolean = true;

  cartoes: Card[] = [
      {
        status: 'ativo',
        credito: 0,
        tipo_cartao: 'Débito',
        cor_cartao: 'blue',
        aproximacao: true,
        cvc: 0o34,
        nome_cartao: 'JOÃO PEDRO PAULINO',
        numero_cartao: '0000 0000 0000 0000',
        validade: '01/30'
      },
      {
        status: 'ativo',
        credito: 50,
        tipo_cartao: 'Crédito',
        cor_cartao: 'black',
        aproximacao: false,
        cvc: 342,
        nome_cartao: 'JOÃO PEDRO PAULINO',
        numero_cartao: '1111 1111 1111 1111',
        validade: '02/29'
      },
    ];
}
