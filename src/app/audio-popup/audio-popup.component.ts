import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VOLUMES } from '../definitions';

@Component({
  selector: 'app-audio-popup',
  templateUrl: './audio-popup.component.html',
  styleUrls: ['./audio-popup.component.css']
})
export class AudioPopupComponent {
  volumes = VOLUMES;


}
