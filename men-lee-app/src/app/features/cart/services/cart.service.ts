import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private STORAGE_KEY='cart';

  private cartItems = new BehaviorSubject<any[]>(this.loadCart());
  cart$ = this.cartItems.asObservable();


  private loadCart():any[]{
    const data =localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
    }

    private saveCart(items:any[]){
       localStorage.setItem(this.STORAGE_KEY,JSON.stringify(items));
       this.cartItems.next(items);
    }

    addToCart(product:any){
      const items=this.loadCart();

      const existing=items.find(p =>p.id===product.id);

      if(existing){
        existing.quantity+=1;
      }else{
        items.push({...product,quantity:1});
      }

      this.saveCart(items);
    }

    removeItem(productId:number){
      const items=this.loadCart().filter(p =>p.id !==productId);
      this.saveCart(items);
    }

    changeQuantity(productId:number,qty:number){
      const items=this.loadCart();

      const item=items.find(p =>p.id ===productId);
      if(!item) return;

      item.quantity = qty < 1 ? 1 :qty

      this.saveCart(items);
    }

    clearCart(){
      this.saveCart([])
    }

    getTotal():number{
      return this.loadCart().reduce((total,item)=>total+item.price * item.quantity,0);
    }

  constructor() { }
}
