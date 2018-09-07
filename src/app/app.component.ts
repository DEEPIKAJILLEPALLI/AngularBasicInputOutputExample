import { Component } from '@angular/core';
import {Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  product: Product;
 products: Product[]; // array of product model

 constructor() {
// setting product model data with default values

    this.products = [new Product( 'Flower',
    'A Red Flower',
    '/assets/images/red.jpg',
    ['women', 'Accessories', 'Flowers'],
    20),
    new Product( 'Flower',
    'A pink Flower',
    '/assets/images/pink.jpg',
    ['women', 'Accessories', 'Flowers'],
    20),
    new Product( 'Flower',
    ' white rose Flower',
    '/assets/images/flower.jpg',
    ['women', 'Accessories', 'Flowers'],
    20),
    new Product( 'Flower',
    'A Rose Flower',
    'assets/images/rose.jpg',
    ['women', 'Accessories', 'Flowers'],
    20)];
 }
// method to display selected product when clicked
 productWasSelected(product: Product): void {
console.log('product Selected:', product);
 }
}
