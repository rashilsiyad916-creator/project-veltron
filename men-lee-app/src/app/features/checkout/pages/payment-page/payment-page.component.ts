import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {

  selectedMethod='code';//default

  constructor(private router:Router){}

  payNow(){

    //fake payment simulation
    const success=Math.random()>0.3;  //705success

    if(success){
      this.router.navigate(['/payment-success']);

    }else{
      this.router.navigate(['payment-failure']);
    }
  }

}
