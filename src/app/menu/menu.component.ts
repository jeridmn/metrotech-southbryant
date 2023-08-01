import { Component, EventEmitter, Output } from '@angular/core';
import { ACTIVITIES } from '../definitions';
import { Activity } from '../models/activity.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuActivities = ACTIVITIES
  @Output() menuItemSelected = new EventEmitter()

  constructor(private router: Router, private currentRoute: ActivatedRoute) {

  }

  onMenuItemSelect(menuActivity: Activity) {
    this.router.navigate([menuActivity.path])
    this.menuItemSelected.emit()
  }

}
