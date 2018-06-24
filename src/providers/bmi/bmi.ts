import { Injectable } from '@angular/core';

@Injectable()
export class BmiProvider {

  calculateBmi (height:number, weight: number) {
    return weight / height / height;
  }
  }
