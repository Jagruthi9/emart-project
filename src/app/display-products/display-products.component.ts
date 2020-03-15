import { Component, OnInit } from '@angular/core';
import { Products1 } from '../model/products1';
import { Products1ServiceService } from '../service/products1-service.service';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrls: ['./display-products.component.css']
})
export class DisplayProductsComponent implements OnInit {

  pro:Products1[];
  errMsg:string;
  constructor(private proService :Products1ServiceService) { }

  ngOnInit() {
   this.loadData();
  }
  loadData(){
    this.errMsg=null;
    
    this.proService.getAll().subscribe(
      (data)=>{this.pro=data;},
      (err)=>{this.errMsg="Sorry unable to load";}
    );
  }
}