import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentServiceService {
  
  baseUrl:string;
  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9096/pay";
   }
   getAll() : Observable<Payment []>{
    return this.httpClient.get<Payment []>(this.baseUrl);
   }
   getByCvv(cvv:number) : Observable<Payment >{ 
    return this.httpClient.get<Payment >(`${this.baseUrl}/${cvv}`);
   }
   add(payment:Payment ) : Observable<Payment >{
     return this.httpClient.post<Payment >(this.baseUrl,payment);
   }
  }