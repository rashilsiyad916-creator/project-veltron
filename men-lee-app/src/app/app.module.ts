import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/auth/pages/login/login.component';
import { RegisterComponent } from './features/auth/pages/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './features/products/pages/product-list/product-list.component';
import { ProductDetailsComponent } from './features/products/pages/product-details/product-details.component';
import { CartPageComponent } from './features/cart/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './features/checkout/pages/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './features/checkout/pages/payment-page/payment-page.component';
import { PaymentSuccessComponent } from './features/checkout/pages/payment-success/payment-success.component';
import { PaymentFailureComponent } from './features/checkout/pages/payment-failure/payment-failure.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartPageComponent,
    CheckoutPageComponent,
    PaymentPageComponent,
    PaymentSuccessComponent,
    PaymentFailureComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({

  positionClass: 'toast-top-right',

  timeOut: 2500,

  closeButton: true,

  progressBar: true,

  preventDuplicates: true,

  newestOnTop: true

})

  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
