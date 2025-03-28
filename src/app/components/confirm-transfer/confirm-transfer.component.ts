import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../services/transfer/transfer.service';
import { Receipt } from '../../Interfaces/Receipt';

@Component({
  selector: 'confirm-transfer',
  standalone: false,
  templateUrl: './confirm-transfer.component.html',
  styleUrl: './confirm-transfer.component.css',
})
export class ConfirmTransferComponent {
  cpfRemetente!: string;
  cpfDestino!: string;
  dinheiro!: number;
  metodoPagamento!: number;
  canConfirm: boolean = true;

  constructor(private router: Router, private service: TransferService) {}

  ngOnInit() {
    this.service.getCpfRemetente().subscribe((cpf) => {
      this.cpfRemetente = cpf;
    });
    this.service.getCpfDestino().subscribe((cpf) => {
      this.cpfDestino = cpf;
    });
    this.service.getDinheiro().subscribe((dinheiro) => {
      this.dinheiro = dinheiro;
    });
    this.service.getMetodoPagamento().subscribe((metodo) => {
      if (metodo == 'money') {
        this.metodoPagamento = 0;
      } else if (metodo == 'blue') {
        this.metodoPagamento = 1;
      } else {
        this.metodoPagamento = 2;
      }
    });
  }

  navigateReceipt() {
    this.canConfirm = false;
    this.service
      .fazerTransferencia(
        this.cpfRemetente,
        this.cpfDestino,
        this.dinheiro,
        this.metodoPagamento
      )
      .subscribe(
        (res) => {
          console.log(`Transferência realizada com sucesso: ${res}`);
          this.router.navigate(['divitibank-transfer-receipt']);
        },
        (err) => {
          console.log(`Erro na transferência: ${err}`);
        }
      );
  }

  navigatePrincipal() {
    this.router.navigate(['divitibank-main']);
  }
}
