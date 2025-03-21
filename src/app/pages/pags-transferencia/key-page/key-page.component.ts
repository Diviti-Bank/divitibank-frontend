import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-key-page',
  standalone: false,
  templateUrl: './key-page.component.html',
  styleUrl: './key-page.component.css'
})
export class KeyPageComponent {
  constructor(private router: Router) { }

  navigateInsertAmount(){
    this.router.navigate(['divitibank-transfer-insertAmount']);
  }
}
