import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../model/add-product';
import { ActivatedRoute, Router } from '@angular/router';
import { AddProductService } from '../service/add-product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  
  ap:AddProduct ;
  msg:string;
  isNew:boolean;

  constructor(private apService:AddProductService ,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.apService.getById(id).subscribe(
        (data)=>{
         this.ap=data;
       }
     );
   }else{
     this.isNew=true;
     this.ap={
       id:0,
   name:"",
   category:"",
   discount:0,
   categoryid:0,
   stock:0,
   price:0,
     };
   }
 }
 save() {
   let ob: Observable<AddProduct>;

   if (this.isNew) {
     ob = this.apService.add(this.ap);
   }
   ob.subscribe(
     (data) => {
       
       this.router.navigateByUrl("/ad");
     },
     (errResponse) => {
       this.msg = errResponse.error;

     }
   );
 }


}
