import { Component, OnInit } from "@angular/core";
import { Product } from "./Model/Product";

@Component({
  selector: "app-assignment2",
  templateUrl: "./assignment2.component.html",
  styleUrls: ["./assignment2.component.css"]
})
export class Assignment2Component implements OnInit {
  productArr: Product[] = [
    new Product(100, "Mobile", 10000, 1),
    new Product(101, "Bag", 500, 1),
    new Product(102, "Shoe", 1000, 1),
    new Product(103, "Groceries", 700, 1),
    new Product(104, "Furniture", 15000, 1),
    new Product(105, "Laptop", 35000, 1)
  ];

  showError: boolean;
  id: number;
  totalPrice: number = 0;
  quantity: number = 1;
  element: any;
  discount: boolean = false;

  constructor() {}

  ngOnInit() {
    this.totalPrice = 0;
    for (let i = 0; i < this.productArr.length; i++) {
      this.totalPrice =
        this.totalPrice +
        this.productArr[i].price * this.productArr[i].quantity;
    }

    if (this.totalPrice > 100000) {
      this.discount = true;
    } else {
      this.discount = false;
    }
  }

  validateQuantity(event, id, index) {
    this.productArr[index].quantity = event.target.value;
    this.ngOnInit();
    this.id = id;
    if (event.target.value) {
      this.showError = false;
    } else {
      this.showError = true;
    }
  }

  delete(index) {
    this.productArr.splice(index, 1);
    this.ngOnInit();
  }
}
