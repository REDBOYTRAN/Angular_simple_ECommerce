import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Product} from '../models/product'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product: Product | undefined;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    
  }
}
