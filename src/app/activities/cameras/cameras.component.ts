import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var CrComLib: any

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit{
  cameraPresets = [1, 2, 3, 4]
  CAMERA_PRESET_JOIN_START = 30
  selectedCam = 1;

  constructor(private snackBar: MatSnackBar, private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    CrComLib.subscribeState('b', '17', (selected) => {
      if(selected) {
        this.selectedCam = 1;
        this.ref.detectChanges();
      }
    })
    CrComLib.subscribeState('b', '18', (selected) => {
      if(selected) {
        this.selectedCam = 2;
        this.ref.detectChanges();
      }
    })
    CrComLib.subscribeState('b', '19', (selected) => {
      if(selected) {
        this.selectedCam = 3;
        this.ref.detectChanges();
      }
    })
  }

  leftCamSelect() {
    CrComLib.publishEvent('b', 20, true)
    CrComLib.publishEvent('b', 20, false)
  }

  centerCamSelect() {
    CrComLib.publishEvent('b', 21, true)
    CrComLib.publishEvent('b', 21, false)
  }

  rightCamSelect() {
    CrComLib.publishEvent('b', 22, true)
    CrComLib.publishEvent('b', 22, false)
  }

  onPresetPress(preset: number) {
    CrComLib.publishEvent('b', preset + this.CAMERA_PRESET_JOIN_START, true)
    CrComLib.subscribeState('b', '35', (presetSaved) => {
      if(presetSaved) {
        this.snackBar.open('Saved to Preset ' + preset + '.', 'Dismiss',{
          duration: 2000
        })
      }
    })
  }

  onPresetRelease(preset: number) {
    CrComLib.publishEvent('b', preset + this.CAMERA_PRESET_JOIN_START, false)
  }

  cameraPTZ(join: number) {
    CrComLib.publishEvent('b', join, true)
    CrComLib.publishEvent('b', join, false)
  }

  cameraStop() {
    CrComLib.publishEvent('b', 30, true)
    CrComLib.publishEvent('b', 30, false)
  }
}
