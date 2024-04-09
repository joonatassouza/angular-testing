import { Component, EventEmitter, Output } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent {
  tax: number = 0;
  productPrice: number = 0;
  finalPrice: number = 0;

  @Output() priceWithTax = new EventEmitter<number>();

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.resultValue.subscribe((value) => {
      this.productPrice = value;
      this.calculateProductPrice();
    });
  }

  calculateProductPrice() {
    this.finalPrice = this.productPrice + this.tax;
    this.priceWithTax.emit(this.finalPrice);
  }
}
