import { Component, importProvidersFrom } from '@angular/core';
import { Transfer } from '../../Interfaces/Transfer';

@Component({
  selector: 'app-extract',
  standalone: false,
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.css'
})
export class ExtractComponent {
  verSaldo: boolean = false;
  saldo: number = 6158.89;

  extrato: Transfer[] = [
      { type: 'Transferência efetuada', user: 'Loja do Zé', money: -19.6 },
      { type: 'Transferência recebida', user: 'Rafael Pither', money: 40.0 },
      { type: 'Transferência efetuada', user: 'Loja do Zé', money: -19.6 },
      { type: 'Transferência recebida', user: 'Rafael Pither', money: 40.0 },
      { type: 'Transferência efetuada', user: 'Loja do Zé', money: -19.6 },
      { type: 'Transferência recebida', user: 'Rafael Pither', money: 40.0 },
    ];
}
