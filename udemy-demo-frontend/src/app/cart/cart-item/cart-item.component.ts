import { Component, Input } from '@angular/core';
import { CartItem } from '../../intercace/cart-item';
import { CurrencyPipe } from '@angular/common';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  standalone:true,
  imports: [CurrencyPipe],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.css'
})
export class CartItemComponent {
  @Input({required:true}) item!: CartItem;

  constructor(private cartService:CartService,private route:Router){}

  get starsArray() {
    const rating = this.item?.rating ? +this.item.rating : 0;
    return new Array(Math.floor(rating));
  }
  

  onTitleClick(){
    this.route.navigate(['/item', this.item.id]);
  }

  removeItem() {
    this.cartService.removeFromCart(this.item.id);
  }
}
