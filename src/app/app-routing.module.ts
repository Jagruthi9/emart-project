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
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'',component:HomeComponent},
  {path:'password',component:PasswordComponent},
  {path:'contact',component:ContactComponent},
  {path:'clothing',component:ClothingComponent},
  {path:'electronics',component:ElectronicsComponent},
  {path:'furniture',component:FurnitureComponent},
  {path:'sm',component:SubMenComponent},
  {path:'sw',component:SubWomenComponent},
  {path:'sk',component:SubKidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
