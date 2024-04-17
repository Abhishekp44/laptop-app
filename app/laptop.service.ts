import { Injectable } from '@angular/core';
import { Laptop } from './laptop.model';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private laptops: Laptop[] = [];

  constructor() { }

  getAllLaptops(): Laptop[] {
    return this.laptops;
  }

  getLaptopById(id: number): Laptop | undefined {
    return this.laptops.find(laptop => laptop.id === id);
  }

  addLaptop(laptop: Laptop): void {
    this.laptops.push(laptop);
  }

  updateLaptop(laptop: Laptop): void {
    const index = this.laptops.findIndex(l => l.id === laptop.id);
    if (index !== -1) {
      this.laptops[index] = laptop;
    }
  }

  deleteLaptop(id: number): void {
    this.laptops = this.laptops.filter(laptop => laptop.id !== id);
  }
}
