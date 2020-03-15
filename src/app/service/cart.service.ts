import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../model/cart';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  baseUrl:string;
  
  constructor(private httpClient :HttpClient) { 
    this.baseUrl="http://localhost:9090/users/users";
}
getAll() : Observable<Cart []>{
 return this.httpClient.get<Cart []>(this.baseUrl);
}
getById(id:number) : Observable<Cart >{ 
 return this.httpClient.get<Cart >(`${this.baseUrl}/${id}`);
}
add(cart:Cart ) : Observable<Cart >{
  return this.httpClient.post<Cart >(this.baseUrl,cart);

}
deleteById(id:number ) : Observable<void >{
  return this.httpClient.delete<void >(`${this.baseUrl}/${id}`);
}
}

