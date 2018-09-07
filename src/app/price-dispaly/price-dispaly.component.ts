import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-price-dispaly',
  template: `<div class="price-display">\${{ price }}</div>`,
  styleUrls: ['./price-dispaly.component.css']
})
export class PriceDispalyComponent implements OnInit {
@Input() price: number;
  constructor() { }

  ngOnInit() {
  }

}
