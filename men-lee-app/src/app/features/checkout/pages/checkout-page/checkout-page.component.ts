import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; // optional but recommended

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  cartItems: any[] = [];
  total = 0;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService   // remove if not using toastr
  ) {}

  form = this.fb.group({
    fullName: ['', Validators.required],
    address: ['', Validators.required],
    city: ['', Validators.required],
    pincode: ['', Validators.required]
  });

  ngOnInit() {
    this.cartService.cart$.subscribe((items: any[]) => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
    });
  }

  placeOrder() {

    // Block empty cart checkout (VERY IMPORTANT UX)
    if (this.cartItems.length === 0) {
      this.toastr.warning('Your cart is empty 🛒');
      return;
    }

    // Validate form
    if (this.form.invalid) {
      this.toastr.error('Please fill all details correctly');
      return;
    }

    // Navigate to payment step
    this.toastr.success('Proceeding to Payment 💳');
    this.router.navigate(['/payment']);
  }
}