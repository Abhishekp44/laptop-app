import { Component } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.model';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent {
  brand: string = '';
  model: string = '';
  price: number = 0;

  constructor(private laptopService: LaptopService) { }

  addLaptop(): void {
    const id = Math.floor(Math.random() * 1000); // Generate a random ID
    const laptop: Laptop = { id, brand: this.brand, model: this.model, price: this.price };
    this.laptopService.addLaptop(laptop);
    this.clearFields(); // Clear input fields after adding
  }

  clearFields(): void {
    this.brand = '';
    this.model = '';
    this.price = 0;
  }
}
