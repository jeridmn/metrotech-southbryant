import { Activity } from "./models/activity.model";
import { Display } from "./models/display.model";
import { MatrixInput } from "./models/matrix-input.model";
import { MatrixOutput } from "./models/matrix-output.model";
import { Volume } from "./models/volume.model";

export const ACTIVITIES: Activity[] = [
  {id: 1, name: 'Displays', icon: 'tv', path: 'displays'},
  {id: 2, name: 'Routing', icon: 'screen_share', path: 'routing'},
  {id: 3, name: 'Camera', icon: 'camera', path: 'camera'},
  {id: 4, name: 'Lighting', icon: 'highlight', path: 'lighting'},
]

export const DISPLAYS: Display[] = [
  {id: 1, name: 'Primary Video Wall'},
  {id: 2, name: 'Secondary Video Wall'},
  {id: 3, name: 'Confidence Monitor'},
]

export const MATRIX_INPUTS: MatrixInput[] = [
  new MatrixInput(1, 'Lecturn', 'laptop', 'lecturn'),
  new MatrixInput(2, 'Switcher', 'input', 'switcher'),
  new MatrixInput(3, 'Solstice', 'laptop', 'solice'),
  new MatrixInput(4, 'Bluray Player', 'theaters', 'bluray'),
  new MatrixInput(5, 'Rack PC', 'desktop_windows', 'pc'),
  new MatrixInput(0, 'Blank', 'highlight_off', 'blank'),
]

export const MATRIX_OUTPUTS: MatrixOutput[] = [
  new MatrixOutput(1, 'Primary Wall'),
  new MatrixOutput(2, 'Secondary Wall'),
  new MatrixOutput(3, 'Recorder'),
  new MatrixOutput(4, 'Conf. Monitor'),
  new MatrixOutput(5, 'Tech Desk')

]

export const VOLUMES: Volume[] = [
  new Volume('Bodypack 1', true, 1, 1),
  new Volume('Bodypack 2', true, 2, 1),
  new Volume('Bodypack 3', true, 3, 1),
  new Volume('Handheld 1', true, 4, 1),
  new Volume('Handheld 2', true, 5, 1),
  new Volume('Handheld 3', true, 6, 1),
  new Volume('Gooseneck 1', true, 7, 1),
  new Volume('Gooseneck 2', true, 8, 1),
  new Volume('Wallplate 1', false, 9, 2),
  new Volume('Wallplate 2', false, 10, 2),
  new Volume('Wallplate 3', false, 11, 2),
  new Volume('Wallplate 4', false, 12, 2),
  new Volume('Wallplate 5', false, 13, 2),
  new Volume('Wallplate 6', false, 14, 2),
  new Volume('Blu-Ray', false, 15, 2),
  new Volume('Bluetooth', false, 16, 2),
  new Volume('USB', false, 17, 2)
]


