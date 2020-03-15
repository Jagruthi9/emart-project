import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product-service.service';
import { Product } from '../service/entity/product.entity';

@Component({
  selector: 'app-sub-men',
  templateUrl: './sub-men.component.html',
  styleUrls: ['./sub-men.component.css']
})
export class SubMenComponent implements OnInit {

  public products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.findAll();
  }

}
