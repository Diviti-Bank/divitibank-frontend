import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LoginService } from './services/logCad/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'divitibank-frontend';

  user!:  null;
  endpoint!: string;

  constructor(private router: Router, private loginService: LoginService) {
    this.endpoint = this.router.url;
  }

  ngOnInit() {
    this.router.navigate(['/'])
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.endpoint = event.urlAfterRedirects;
        if (
          this.endpoint == '/divitibank' ||
          this.endpoint == '/divitibank-login' ||
          this.endpoint == '/divitibank-logon' ||
          this.endpoint == '/divitibank-logonError'
        ) {
          this.user = null;
        } else{
          this.loginService.getUsuarioObservable().subscribe((user) => {
            this.user = user;
          })
        }
        console.log('Endpoint atualizado:', this.endpoint);
      });
  }

  ngOnChanges() {
    console.log(this.router.url);
    this.endpoint = this.router.url;
  }
}
