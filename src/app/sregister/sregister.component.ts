import { Component, OnInit } from '@angular/core';
import { Sellers } from '../model/sellers';
import { SellerserviceService } from '../service/sellerservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sregister',
  templateUrl: './sregister.component.html',
  styleUrls: ['./sregister.component.css']
})
export class SregisterComponent implements OnInit {
  sellers=new Sellers(1,"","","","","");
  seller:Sellers ;
  msg:string;
  isNew:boolean;
  constructor(private sellerService:SellerserviceService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {let id=this.actRoute.snapshot.params.id;
    if(id){
      this.isNew=false;
      this.sellerService.getById(id).subscribe(
        (data)=>{
         this.seller=data;
       }
     );
   }else{
     this.isNew=true;
     this.seller={
       id:0,
   firstName:"",
   lastName:"",
   email:"",
   password:"",
   mobileno:"",

     };
   }
 }
 save() {
   let ob: Observable<Sellers>;

   if (this.isNew) {
     ob = this.sellerService.add(this.seller);
   }
   ob.subscribe(
     (data) => {
       
       this.router.navigateByUrl("sreg/seller");
     },
     (errResponse) => {
       this.msg = errResponse.error;

     }
   );
 }
}
