import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    SubKidComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
