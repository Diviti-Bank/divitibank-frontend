import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-general-error',
  standalone: false,
  templateUrl: './general-error.component.html',
  styleUrl: './general-error.component.css'
})
export class GeneralErrorComponent {
  message!: string | null;
  isStart!: string | null;


  constructor(private router: Router, private route: ActivatedRoute) {
    this.message = this.route.snapshot.paramMap.get('message');
    this.isStart = this.route.snapshot.paramMap.get('start');
  }

  navigateBack(){
    window.history.back()
  }
}
