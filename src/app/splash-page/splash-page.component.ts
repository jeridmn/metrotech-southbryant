import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.css']
})
export class SplashPageComponent {
  constructor(private router: Router, private currentRoute: ActivatedRoute) {

  }

  splashPress() {
    this.router.navigate(['home'], {relativeTo: this.currentRoute})
  }
}
