import { Component, Input } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.model';

@Component({
  selector: 'app-update-laptop',
  templateUrl: './update-laptop.component.html',
  styleUrls: ['./update-laptop.component.css']
})
export class UpdateLaptopComponent {
  @Input() laptop: Laptop | undefined;
  updatedBrand: string = '';
  updatedModel: string = '';
  updatedPrice: number = 0;

  constructor(private laptopService: LaptopService) { }

  ngOnChanges(): void {
    if (this.laptop) {
      this.updatedBrand = this.laptop.brand;
      this.updatedModel = this.laptop.model;
      this.updatedPrice = this.laptop.price;
    }
  }

  updateLaptop(): void {
    if (this.laptop) {
      const updatedLaptop: Laptop = { ...this.laptop, brand: this.updatedBrand, model: this.updatedModel, price: this.updatedPrice };
      this.laptopService.updateLaptop(updatedLaptop);
    }
  }
}
