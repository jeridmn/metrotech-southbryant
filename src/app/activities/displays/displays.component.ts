import { Component, OnInit } from '@angular/core';
import { DISPLAYS } from 'src/app/definitions';
import { Display } from 'src/app/models/display.model';
declare var CrComLib: any;

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.css']
})
export class DisplaysComponent implements OnInit{
  displays = DISPLAYS
  DISPLAY_JOIN_START = 10;
  DISPLAY_CONTROL_COUNT = 2;

  ngOnInit(): void {

  }

  displayOnPress(display: Display) {
    CrComLib.publishEvent('b',
    (display.id*this.DISPLAY_CONTROL_COUNT-1)+this.DISPLAY_JOIN_START, true)
    CrComLib.publishEvent('b',
    (display.id*this.DISPLAY_CONTROL_COUNT-1)+this.DISPLAY_JOIN_START, false)
  }

  displayOffPress(display: Display) {
    CrComLib.publishEvent('b',
    (display.id*this.DISPLAY_CONTROL_COUNT)+this.DISPLAY_JOIN_START, true)
    CrComLib.publishEvent('b',
    (display.id*this.DISPLAY_CONTROL_COUNT)+this.DISPLAY_JOIN_START, false)
  }
}

// Rm1.Display.01.On.Press 1
// Rm1.Display.01.Off.Press 2
// Rm1.Display.02.On.Press 3
// Rm1.Display.02.Off.Press 4


