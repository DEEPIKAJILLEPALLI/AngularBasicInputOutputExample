import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import {Product} from '../product.model';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
@Input() ProductList: Product[];
// Use by directives and components to emit custom Events.
@Output() onproductSelected: EventEmitter<Product>;
private currentProduct: Product;
  constructor() {
  // Creates an instance of {@link EventEmitter}, which depending on isAsync, delivers events synchronously or asynchronously.
    this.onproductSelected = new EventEmitter();
   }

  ngOnInit() {
  }
  clicked(product: Product): void {
    this.currentProduct = product;
    // emits the selected product
    this.onproductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }


}
