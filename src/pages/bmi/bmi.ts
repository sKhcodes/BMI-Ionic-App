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

  constructor(private bmiProvider: BmiProvider) { }
}
