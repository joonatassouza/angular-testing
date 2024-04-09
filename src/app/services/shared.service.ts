import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private sharedValue = new BehaviorSubject<number>(0);

  resultValue = this.sharedValue.asObservable();

  constructor() {}

  calculateProductDiscount(price: number, discount: number) {
    this.sharedValue.next(price - discount);
  }
}
