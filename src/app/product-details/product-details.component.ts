import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductAlertsComponent } from '../product-alerts/product-alerts.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  // @Input() product: Product | undefined;
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute, 
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    //First get the product id from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    //Find the product with the productId provided in the route
    this.product = this.getProduct(productIdFromRoute);

    console.log('1',routeParams);
    console.log('2',productIdFromRoute);
    console.log('3',this.product);
  }

  getProduct(productId: number) {
    return this.cartService.getProduct(productId);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

  onNotify() {
    alert("You will be notified when the product goes on sale");
  }

}
