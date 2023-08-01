import { Component, Input } from '@angular/core';
import { Volume } from '../models/volume.model';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent {
@Input() volume: Volume

}
