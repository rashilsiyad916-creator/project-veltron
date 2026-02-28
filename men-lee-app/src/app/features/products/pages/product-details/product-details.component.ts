import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;

  constructor(
   private route:ActivatedRoute,
   private productService:ProductService,
   private cartService:CartService,
   private toastr:ToastrService

  ){}

  ngOnInit() {
    const id=Number(this.route.snapshot.paramMap.get('id'));
    this.product=this.productService.getProductById(id);
    
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.toastr.success('Item added to cart 🛒')
  }

}
