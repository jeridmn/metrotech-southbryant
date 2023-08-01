import { Injectable, OnInit } from '@angular/core';
import { MatrixInput } from '../models/matrix-input.model';
import { MatrixOutput } from '../models/matrix-output.model';
import { MATRIX_INPUTS, MATRIX_OUTPUTS } from '../definitions';

@Injectable({
  providedIn: 'root'
})
export class RoutingService{
  matrixRouting = new Map()

  constructor() {
    MATRIX_OUTPUTS.forEach((output) => {
      this.matrixRouting.set(output, new MatrixInput(0, 'Blank', 'highlight_off', 'blank'))
    })
  }

  routeOutput(output: MatrixOutput, selectedInput: MatrixInput) {

    this.matrixRouting.set(output, selectedInput)
  }
}
