import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AudioPopupComponent } from '../audio-popup/audio-popup.component';
import { PowerPopupComponent } from '../power-popup/power-popup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter()
  currentTime = new Date()

  constructor(private router: Router, public popup: MatDialog) {

  }

  onHomePress() {
    this.router.navigate(['home'])
  }

  onMenuToggle() {
    this.menuToggled.emit()
  }

  openAudioPopup() {
    const popupRef = this.popup.open(AudioPopupComponent)
  }

  onPowerPress() {
    const powerPopupRef = this.popup.open(PowerPopupComponent)
  }
}
