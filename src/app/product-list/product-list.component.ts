import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  products = [
    {
      id: 1,
      name: 'Phone XL',
      description: 'super big phone with great price',
      price: 1000
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
      // description: 'super big phone with great camera',
      price: 700
    }
  ];

  share() {
    console.log("share!!!");
    alert("The product has been shared!");

  };

  onNotify() {
    alert("You will be notified when the product goes on sale");
  }

}
