import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptop.model';

@Component({
  selector: 'app-laptop-list',
  templateUrl: './laptop-list.component.html',
  styleUrls: ['./laptop-list.component.css']
})
export class LaptopListComponent implements OnInit {
  laptops: Laptop[] = [];

  constructor(private laptopService: LaptopService) { }

  ngOnInit(): void {
    this.loadLaptops();
  }

  loadLaptops(): void {
    this.laptops = this.laptopService.getAllLaptops();
  }

  deleteLaptop(id: number): void {
    this.laptopService.deleteLaptop(id);
    this.loadLaptops(); // Reload the list after deletion
  }
}
