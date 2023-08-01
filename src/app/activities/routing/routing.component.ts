import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MATRIX_INPUTS, MATRIX_OUTPUTS } from 'src/app/definitions';
import { MatrixInput } from 'src/app/models/matrix-input.model';
import { MatrixOutput } from 'src/app/models/matrix-output.model';
import { RoutingService } from 'src/app/services/routing.service';
declare var CrComLib: any

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit{
  selectedInput = new MatrixInput(0, '', '', '');
  matrixInputs = MATRIX_INPUTS
  matrixOutputs = MATRIX_OUTPUTS
  MATRIX_OUTPUT_JOIN_START = 10

  constructor(
    public routingService: RoutingService,
    private ref: ChangeDetectorRef,
    private snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.matrixOutputs.forEach((output) => {
      CrComLib.subscribeState('s', (output.id + this.MATRIX_OUTPUT_JOIN_START + 10).toString(), (nvxStream) => {
        if(this.matrixInputs.find(input => input.nvxStream === nvxStream) != undefined)
          this.routingService.routeOutput(output, this.matrixInputs.find(input => input.nvxStream === nvxStream))
        this.ref.detectChanges();
      })
    })
  }

  inputSelected(input: MatrixInput) {
    this.selectedInput = input;
  }

  outputSelected(output: MatrixOutput) {
    CrComLib.publishEvent('s', output.id + this.MATRIX_OUTPUT_JOIN_START, this.selectedInput.nvxStream)
  }

}
