import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-amount',
  standalone: false,
  templateUrl: './insert-amount.component.html',
  styleUrl: './insert-amount.component.css',
})
export class InsertAmountComponent {
  @ViewChild('inputRef') inputRef!: ElementRef;
  formattedValue: string = "_,__";

  constructor(private router: Router) { }

  formatInput(event: any) {
    let rawValue = event.target.value.replace(/[^0-9]/g, '');

    while (rawValue.length < 3) {
      rawValue = "_" + rawValue;
    }

    this.formattedValue = rawValue.slice(0, -2) + ',' + rawValue.slice(-2);

    this.adjustCursor();
  }

  preventInvalidDelete(event: KeyboardEvent) {
    const input = this.inputRef.nativeElement;
    const cursorPos = input.selectionStart;
    const blockedPositions = [0, 1, 2];

    if ((event.key === "Backspace" && blockedPositions.includes(cursorPos! - 1)) ||
        (event.key === "Delete" && blockedPositions.includes(cursorPos!))) {
      event.preventDefault();
      return;
    }

    if (!/^[0-9]$/.test(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete" &&
        event.key !== "ArrowLeft" &&
        event.key !== "ArrowRight") {
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

  navigatePaymentMethod(){
    this.router.navigate(['divitibank-transfer-paymentMethod', this.inputRef.nativeElement.value]);
  }
}
