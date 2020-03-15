import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
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
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { SellerComponent } from './seller/seller.component';
import { AddProductComponent } from './add-product/add-product.component';
import { IbuyerComponent } from './ibuyer/ibuyer.component';
import { IsellerComponent } from './iseller/iseller.component';
import { SregisterComponent } from './sregister/sregister.component';
import { PayListComponent } from './pay-list/pay-list.component';
import { SuccessPayComponent } from './success-pay/success-pay.component';
import { DisplayProductsComponent } from './display-products/display-products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BuyerComponent,
    HomeComponent,
    PasswordComponent,
    ContactComponent,
    ClothingComponent,
    ElectronicsComponent,
    FurnitureComponent,
    SubMenComponent,
    SubWomenComponent,
    SubKidComponent,
    CartComponent,
    PaymentComponent,
    SellerComponent,
    AddProductComponent,
    IbuyerComponent,
    IsellerComponent,
    SregisterComponent,
    PayListComponent,
    SuccessPayComponent,
    DisplayProductsComponent
    
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
