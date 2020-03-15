import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { PasswordComponent } from './password/password.component';
import { ContactComponent } from './contact/contact.component';
import { ClothingComponent } from './clothing/clothing.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { SubMenComponent } from './sub-men/sub-men.component';
import { SubWomenComponent } from './sub-women/sub-women.component';
import { SubKidComponent } from './sub-kid/sub-kid.component';
import { CartComponent } from './cart/cart.component'
import { PaymentComponent } from './payment/payment.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { IbuyerComponent } from './ibuyer/ibuyer.component';
import { IsellerComponent } from './iseller/iseller.component';
import { SregisterComponent } from './sregister/sregister.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { SuccessPayComponent } from './success-pay/success-pay.component';
import { DisplayProductsComponent } from './display-products/display-products.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'',component:HomeComponent},
  {path:'password',component:PasswordComponent},
  {path:'contact',component:ContactComponent},
  {path:'clothing',component:ClothingComponent},
  {path:'clothing/sm/ct',component:CartComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'sm',component:SubMenComponent},
  {path:'sw',component:SubWomenComponent},
  {path:'sk',component:SubKidComponent},
  {path:'ct',component:CartComponent},
  {path:'pt',component: PaymentComponent},
  {path:'seller',component: SellerComponent},
  {path:'ad',component: AddProductComponent},
  {path:'buyer/ib',component: IbuyerComponent},
  {path:'ib',component: IbuyerComponent},
  {path:'register/buyer',component:BuyerComponent},
  {path:'register/buyer/ib',component:IbuyerComponent},
  {path:'seller/is',component: IsellerComponent},
  {path:'is',component: IsellerComponent},
  {path:'sreg',component: SregisterComponent},
  {path:'sreg/seller',component: SellerComponent},
  {path:'sreg/seller/is',component: IsellerComponent},
  {path:'spay',component: PayListComponent},
  {path:'pt/pays',component:  SuccessPayComponent},
  {path:'dp',component:DisplayProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
