import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  
  products = this.getProductList();

  getProductList() {
    return this.cartService.getProductList();
  }

  share() {
    alert("The product has been shared!");
  };

  onNotify() {
    alert("You will be notified when the product goes on sale");
  }

}
