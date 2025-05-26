import { Component, computed, OnInit } from '@angular/core';
import { CartItemComponent } from "./cart-item/cart-item.component";
import { CartItem } from '../intercace/cart-item';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../services/cart-service';
import { Subscription } from 'rxjs';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone:true,
  imports: [CartItemComponent,ButtonModule,CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
   private cartSubscription!: Subscription;
  cartItems: CartItem[] = [];
  totalPrice: number = 0;
  
  constructor(private cartService: CartService,private messageService: MessageService) {}


  ngOnInit(): void {
    this.cartSubscription = this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }

  

   removeItem(id: string) {
    this.cartService.removeFromCart(id);
  }


  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe();
  }

}
