import { Component } from '@angular/core';
import { IonicPage, } from 'ionic-angular';
import {BmiProvider} from '../../providers/bmi/bmi'
import { BMI } from '../../models/bmi.model';

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',
})
export class BmiPage {
  height: number;
  weight: number;
  BMI: BMI;

  constructor(private BmiProvider: BmiProvider) { }

calculateBmi() {
this.BMI = this.BmiProvider.calculateBmi(this.height, this.weight);
}
}