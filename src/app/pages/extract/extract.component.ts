import { Component, importProvidersFrom } from '@angular/core';
import { Transfer } from '../../Interfaces/Transfer';

@Component({
  selector: 'app-extract',
  standalone: false,
  templateUrl: './extract.component.html',
  styleUrl: './extract.component.css',
})
export class ExtractComponent {
  verSaldo: boolean = false;
  saldo: number = 6158.89;

  data1: Date = new Date(2025, 4, 14)
  data2: Date = new Date(2025, 1, 2)

  extrato: Transfer[] = [
    { tipo: 'Transferência efetuada', origem: 'Loja do Zé', quantia: -19.6, data: this.data1 },
    { tipo: 'Transferência recebida', origem: 'Rafael Pither', quantia: 40.0, data: this.data2  },
    { tipo: 'Transferência efetuada', origem: 'Loja do Zé', quantia: -19.6, data: this.data1 },
    { tipo: 'Transferência recebida', origem: 'Rafael Pither', quantia: 40.0, data: this.data2  },
    { tipo: 'Transferência efetuada', origem: 'Loja do Zé', quantia: -19.6, data: this.data1 },
    { tipo: 'Transferência recebida', origem: 'Rafael Pither', quantia: 40.0, data: this.data2  },
  ];
}
