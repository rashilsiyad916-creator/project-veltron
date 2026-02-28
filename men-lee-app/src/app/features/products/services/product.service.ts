import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private products=[
    {

    id:1,
    name:'football boots',
    price :2500,
    image:'assets/images/nike.boot(1).jpg',
    
    description:'high quality football shoes for professionals'

  },
{
 
  id:2,
  name:'jersey',
  price:1200,
  image: 'assets/images/jersey.jpg' ,
  description:'comfortable sports jersey'

},
{

  id:3,
  name:'football',
  price:3500,
  image:'assets/images/puma.football.jpg',
  description:'puma - premierleague- football'
}
];

getProducts(){
  return this.products;
}

getProductById(id:number){

  return this.products.find(p => p.id ===id);
}
  constructor() { }
}
