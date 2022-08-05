import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { ProductListComponent } from '../product-list/product-list.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  products = [
    {
      id: 1,
      name: 'Phone XL',
      description: 'super big phone with great price'
      // price: 1000
    },
    {
      id: 2,
      name: 'Phone Mini',
      description: 'super big phone with great camera',
      price: 500
    },
    {
      id: 3,
      name: 'Phone Standard',
      description: 'super big phone with great chip',
      price: 700
    }
  ];

  constructor() { }

  getItems() {
    return this.items;
  }

  getProduct(productId: number) {
    return this.products.find(x => (x.id === productId));
  }

  getProductList() {
    return this.products;
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
