

import { Injectable } from '@angular/core';
import { Product } from './entity/product.entity';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[];
  constructor() {
    this.products = [
      { id: 'p1', name: 'Breil by Fort Collins', price: 600, photo: 'assets/images/blz1.jpg '},
      { id: 'p2', name: 'Solid Hooded Neck Casual Solid Hooded Neck Casual ', price: 300, photo: 'assets/images/man1.jpg' },
      { id: 'p3', name: 'Jeans', price: 500, photo: 'assets/images/j1,jpg.jpg' },
     
      { id: 'p4', name: 'Traditional Solid Blend', price: 1000, photo: 'assets/images/tr.jpg' },
      

  ];
}


findAll(): Product[] {
  return this.products;
}

find(id: string): Product {
  return this.products[this.getSelectedIndex(id)];
}

public getSelectedIndex(id: string) {
  for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
          return i;
      }
  }
  return -1;
}

}


   
  

  

  





