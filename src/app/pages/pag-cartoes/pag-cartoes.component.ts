import { Component } from '@angular/core';
import { Card } from '../../interfaces/Card';

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
        id: 1,
        name: 'JOAO PEDRO PAULINO',
        cvc: '696',
        type: 'Débito',
        number: '0000 0000 0000 0000',
        expireDate: '01/30',
        aprox: 'Sim',
        color: 1,
      },
      {
        id: 2,
        name: 'JOAO PEDRO PAULINO',
        cvc: '969',
        type: 'Crédito',
        number: '1111 1111 1111 1111',
        expireDate: '03/29',
        aprox: 'Não',
        color: 2,
      },
    ];
}
