import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProduct } from '../model/add-product';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  baseUrl:string;
  constructor(
    private httpClient :HttpClient) { 

      this.baseUrl="http://localhost:9098/product/products";
    }
    getAll() : Observable<AddProduct []>{
     return this.httpClient.get<AddProduct[]>(this.baseUrl);
    }
    getById(id:number) : Observable<AddProduct >{ 
     return this.httpClient.get<AddProduct >(`${this.baseUrl}/${id}`);
    }
    add(ap:AddProduct ) : Observable<AddProduct >{
      return this.httpClient.post<AddProduct >(this.baseUrl,ap);
    }
   }
 
