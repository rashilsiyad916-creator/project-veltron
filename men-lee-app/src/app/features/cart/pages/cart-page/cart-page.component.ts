import { Component,OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartItems:any[]=[];
  total= 0;

  constructor( private cartService: CartService){}
   
  ngOnInit() {
    this.cartService.cart$.subscribe((items:any[]) =>{
      this.cartItems=items;
      this.total=this.cartService.getTotal();

    });
  }

  remove(id:number){
    this.cartService.removeItem(id);
  }

  updateQty(id:number , event:any){
    const qty = Number(event.target.value);
    this.cartService.changeQuantity(id,qty)
  }
}

