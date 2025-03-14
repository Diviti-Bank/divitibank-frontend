import { Component } from '@angular/core';

@Component({
  selector: 'principal',
  standalone: false,
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  verSaldo: boolean = false;
  saldo: number = 6158.89;
}
