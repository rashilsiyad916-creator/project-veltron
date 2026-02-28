import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any[]=[];

  constructor(
    private productService:ProductService,
    private router:Router
  ){}

  ngOnInit() {
    this.products=this.productService.getProducts();

  }

  viewDetails(id:number){
    this.router.navigate(['/products',id])
  }

}
