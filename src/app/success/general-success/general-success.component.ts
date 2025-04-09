import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-general-success',
  standalone: false,
  templateUrl: './general-success.component.html',
  styleUrl: './general-success.component.css',
})
export class GeneralSuccessComponent {
  message!: string | null;
  isStart!: string | null;
  buttonMessage!: string | null;
  endpoint!: string | null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.message = this.route.snapshot.paramMap.get('message');
    this.isStart = this.route.snapshot.paramMap.get('start');
    this.buttonMessage = route.snapshot.paramMap.get('buttonMessage')
    this.endpoint = route.snapshot.paramMap.get('endpoint');
  }

  navigateEndpoint() {
    this.router.navigate([this.endpoint]);
  }
}
