import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl:string;
  constructor(private httpClient :HttpClient) {
    this.baseUrl="http://localhost:9092/contact/contacts"

   }
   getAll() : Observable<Contact []>{
    return this.httpClient.get<Contact []>(this.baseUrl);
   }
   getByEmail(email:String) : Observable<Contact >{ 
    return this.httpClient.get<Contact >(`${this.baseUrl}/${email}`);
   }
   add(contact:Contact ) : Observable<Contact >{
     return this.httpClient.post<Contact >(this.baseUrl,contact);
   }
  }

