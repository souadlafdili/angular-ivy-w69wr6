import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {
  items = [];

  constructor(private http:HttpClient){

  }

  addItem(product){
    this.items.push(product);
  }
  getItems(){
    return this.items;
  }
  clearItems(){
    this.items=[];
    return this.items;
  }

  getShippingData(){
    return this.http.get('/assets/shipping.json');
  }


}