import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { AuthGuard } from 'app/shared/guard/auth.guard';



const routes: Routes = [
  {path:'',component:LoginPageComponent,canActivate: [AuthGuard]},
  {path:'register',component:RegisterPageComponent,canActivate: [AuthGuard]},
  {path:'home',component:HomePageComponent,canActivate: [AuthGuard]},
  {path:'product',component:ListProductComponent,canActivate: [AuthGuard]},
  {path:'product/edit/:id',component:EditComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
