import { Component } from '@angular/core';
import { ACTIVITIES } from '../definitions';
import { Activity } from '../models/activity.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  activities = ACTIVITIES

  constructor(private router: Router, private currentRoute: ActivatedRoute) {

  }

  onActivitySelect(activity: Activity) {
    this.router.navigate([activity.path])
  }
}
