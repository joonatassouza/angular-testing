import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent {
  price = 0;
  discount = 0;

  @Input()
  finalPrice: number = 0;

  constructor(private sharedService: SharedService) {}

  getFinalPrice(price: number) {
    this.finalPrice = price;
  }

  calculateDiscount() {
    this.sharedService.calculateProductDiscount(this.price, this.discount);
  }
}
