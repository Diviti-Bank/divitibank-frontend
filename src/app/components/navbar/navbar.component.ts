import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/logCad/login/login.service';

@Component({
  selector: 'navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isChecked: boolean = false;

  constructor(private router: Router, private loginService: LoginService) { }

  navigateUserInfo(){
    this.isChecked = false;
    this.router.navigate(['divitibank-userInfo'])
  }

  navigatePrincipal() {
    this.isChecked = false;
    this.router.navigate(['divitibank-main'])
  }

  navigatePagInicial() {
    window.location.reload();
  }
}
