import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { TransferService } from '../../../services/transfer/transfer.service';
import { User } from '../../../Interfaces/User';
import { LoginService } from '../../../services/logCad/login/login.service';

@Component({
  selector: 'app-insert-amount',
  standalone: false,
  templateUrl: './insert-amount.component.html',
  styleUrl: './insert-amount.component.css',
})
export class InsertAmountComponent {
  @ViewChild('inputRef') inputRef!: ElementRef;
  formattedValue: string = '_,__';

  remetente!: User;
  destinatario!: User;

  constructor(
    private router: Router,
    private service: TransferService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.loginService.getUsuarioObservable().subscribe((user) => {
      this.remetente = user;
    });

    this.service.getDestino().subscribe((user) => {
      this.destinatario = user;
    });
  }

  formatInput(event: any) {
    let rawValue = event.target.value.replace(/[^0-9]/g, '');

    while (rawValue.length < 3) {
      rawValue = '_' + rawValue;
    }

    this.formattedValue = rawValue.slice(0, -2) + ',' + rawValue.slice(-2);

    this.adjustCursor();
  }

  preventInvalidDelete(event: KeyboardEvent) {
    const input = this.inputRef.nativeElement;
    const cursorPos = input.selectionStart;
    const blockedPositions = [0, 1, 2];

    if (
      (event.key === 'Backspace' &&
        blockedPositions.includes(cursorPos! - 1)) ||
      (event.key === 'Delete' && blockedPositions.includes(cursorPos!))
    ) {
      event.preventDefault();
      return;
    }

    if (
      !/^[0-9]$/.test(event.key) &&
      event.key !== 'Backspace' &&
      event.key !== 'Delete' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight'
    ) {
      event.preventDefault();
    }
  }

  adjustCursor() {
    setTimeout(() => {
      const input = this.inputRef.nativeElement;
      let pos = input.selectionStart;

      if (pos === 2) {
        input.setSelectionRange(3, 3);
      }
    });
  }

  formatarParaNumero(): number {
    const valorFormatado = this.formattedValue
      .replace(/_/g, '0')
      .replace(',', '.');

    return parseFloat(valorFormatado);
  }

  maisDeCentavo(): boolean {
    return this.formatarParaNumero() >= 0.01;
  }

  dinheiroMenorQueSaldo() {
    return this.formatarParaNumero() <= this.remetente.saldo;
  }

  navigateInsertKey() {
    this.router.navigate(['divitibank-transfer-keyPage']);
  }

  navigatePaymentMethod() {
    if (this.maisDeCentavo()) {
      if (this.dinheiroMenorQueSaldo()) {
        this.service.setDinheiro(this.formatarParaNumero());
        this.router.navigate(['divitibank-transfer-paymentMethod']);
      } else {
        this.router.navigate([
          '/divitibank-error',
          'A quantia transferida deve ser menor ou igual ao seu saldo.',
          false,
        ]);
      }
    } else {
      this.router.navigate([
        '/divitibank-error',
        'A quantia transferida deve ser de, ao menos, 1 centavo (0,01).',
        false,
      ]);
    }
  }
}
