import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { PriceDispalyComponent } from './price-dispaly/price-dispaly.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    ProductRowComponent,
    ProductImageComponent,
    PriceDispalyComponent,
    ProductDepartmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
