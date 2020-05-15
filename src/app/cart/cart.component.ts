import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;
  checkoutForm;
  constructor(private cartService : CartService,
              private form : FormBuilder ) {
                this.checkoutForm=this.form.group({
                  name : this.form.control('',[Validators.required,Validators.minLength(4)]),
                  address :this.form.control('',Validators.required)
                });
               }

  ngOnInit() {
    this.items=this.cartService.getItems();
  }

onSubmit(customerData) {
    // Process checkout data here
    this.items = this.cartService.clearItems();
    this.checkoutForm.reset();

    console.warn('Your order has been submitted', customerData);
  }

}