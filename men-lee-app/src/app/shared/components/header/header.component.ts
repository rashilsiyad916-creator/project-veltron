import { Component,OnInit } from '@angular/core';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { AuthService } from 'src/app/features/auth/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

   cartCount=0;

   
  constructor(
    private catrService:CartService,
    private authService:AuthService
  ){}

    ngOnInit() {
    this.catrService.cart$.subscribe((items: any[]) => {
      this.cartCount = items.length;
    });
  }

  logout() {
    this.authService.logout();
  }

  

}
