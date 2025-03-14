import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) { }

  navigateUserInfo(){
    this.router.navigate(['divitibank-userInfo'])
  }

  navigatePrincipal() {
    this.router.navigate(['divitibank-main'])
  }

  navigatePagInicial() {
    this.router.navigate([''])
  }
}
