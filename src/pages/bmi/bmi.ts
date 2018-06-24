import { Component } from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import {BmiProvider} from '../../providers/bmi/bmi'

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {
  height: number;
  weight: number;
  bmi: number;

  constructor(private BmiProvider: BmiProvider) { }

calculateBmi() {
this.bmi = this.bmiProvider.calculateBmi(this.height, this.weight);
}
}