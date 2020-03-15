import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sellers } from '../model/sellers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerserviceService {
  baseUrl:string;
  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9095/sellers/sellers";
   }
   getAll() : Observable<Sellers []>{
    return this.httpClient.get<Sellers []>(this.baseUrl);
   }
   getById(id:number) : Observable<Sellers >{ 
    return this.httpClient.get<Sellers >(`${this.baseUrl}/${id}`);
   }
   add(seller:Sellers ) : Observable<Sellers >{
     return this.httpClient.post<Sellers >(this.baseUrl,seller);
   }
  }
