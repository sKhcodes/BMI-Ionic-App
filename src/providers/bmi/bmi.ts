import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {

  calculateBmi (height: number, weight: number) {
    return weight / height / height;
  }

  classifyBmi (BMI: number) {
    if (BMI < 18.5) {
      return 'Underweight'
    } else if (BMI > 18.5 && BMI < 24.9) {
      return 'Normal Weight';
    } else if (BMI > 25 && BMI < 29.9) {
      return 'Overweight';
    } else if (BMI > 30 && BMI < 34.9) {
      return 'Class 1 Obesity';
    } else if (BMI > 35 && BMI < 39.9) {
      return 'Class 2 Obesity' ;
    } else if (BMI > 40) {
      return 'Class 3 Obestity';
    }
  }
    }