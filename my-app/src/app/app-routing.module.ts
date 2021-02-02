import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'register',component:RegisterPageComponent},
  {path:'home',component:HomePageComponent},
  {path:'product',component:ListProductComponent},
  {path:'product/edit/:id',component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
