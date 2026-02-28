import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductListComponent} from './features/products/pages/product-list/product-list.component';
import { ProductDetailsComponent } from './features/products/pages/product-details/product-details.component';
import { CartPageComponent } from './features/cart/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './features/checkout/pages/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './features/checkout/pages/payment-page/payment-page.component';
import { PaymentSuccessComponent } from './features/checkout/pages/payment-success/payment-success.component';
import { PaymentFailureComponent } from './features/checkout/pages/payment-failure/payment-failure.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  //protected pages
  {path:'products',component:ProductListComponent,canActivate:[AuthGuard]},
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [AuthGuard] },
  {path:'cart',component:CartPageComponent,canActivate:[AuthGuard]},
  {path:'checkout',component:CheckoutPageComponent,canActivate:[AuthGuard]},
  {path:'payment',component:PaymentPageComponent,canActivate:[AuthGuard]},
  {path:'payment-success',component:PaymentSuccessComponent,canActivate:[AuthGuard]},
  {path:'payment-failure',component:PaymentFailureComponent,canActivate:[AuthGuard]},

  {path:'**',redirectTo:'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
