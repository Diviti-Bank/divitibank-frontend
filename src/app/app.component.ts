import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'divitibank-frontend';

  user!: string | null;
  endpoint!: string;

  constructor( private router: Router ) {
    this.endpoint = this.router.url;
  } 
  
  ngOnInit(){
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.endpoint = event.urlAfterRedirects;
        if(this.endpoint == '/divitibank' || this.endpoint == '/divitibank-login' || this.endpoint == '/divitibank-cadastro'){
          this.user = null;
        }
        else{
          this.user = 'a'
        }
        console.log('Endpoint atualizado:', this.endpoint);
      });
  }

  ngOnChanges(){
    console.log(this.router.url);
    this.endpoint = this.router.url;
  }
}
