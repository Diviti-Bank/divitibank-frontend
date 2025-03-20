import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'confirm-transfer',
  standalone: false,
  templateUrl: './confirm-transfer.component.html',
  styleUrl: './confirm-transfer.component.css',
})
export class ConfirmTransferComponent {
  constructor(private router: Router) {}

  navigatePrincipal(){
    this.router.navigate(['divitibank-main']);
  }
}
