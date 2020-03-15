import { Component, OnInit } from '@angular/core';
import { Payment } from '../model/payment';
import { PaymentServiceService } from '../service/payment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
 payments=new Payment("","","","","",1);
  payment:Payment;
  msg:string;
  isNew:boolean;

  constructor(private paymentService:PaymentServiceService,
    private actRoute:ActivatedRoute,
    private router:Router
    ) { }

  ngOnInit() {let cvv=this.actRoute.snapshot.params.cvv;
    if(cvv){
      this.isNew=false;
      this.paymentService.getByCvv(cvv).subscribe(
        (data)=>{
         this. payment=data;
       }
     );
   }else{
     this.isNew=true;
     this.payment={
       
   name:"",
   cardno:"",
   bankname:"",
   IFSC:"",
   accno:"",
   cvv:0

     };
   }
 }
 save() {
   let ob: Observable<Payment>;

   if (this.isNew) {
     ob = this.paymentService.add(this.payment);
   }
   ob.subscribe(
     (data) => {
       
       this.router.navigateByUrl("pt/pays");
     },
     (errResponse) => {
       this.msg = errResponse.error;

     }
   );
 }


}