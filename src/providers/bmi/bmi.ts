import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {

  calculateBMI (height:number, weight: number) {
    return weight / height / height;
  }
  }
