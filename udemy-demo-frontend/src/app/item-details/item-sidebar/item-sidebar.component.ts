import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ItemModel } from '../../intercace/item-model';
import { CartService } from '../../services/cart-service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-item-sidebar',
  standalone:true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './item-sidebar.component.html',
  styleUrl: './item-sidebar.component.css'
})
export class ItemSidebarComponent {
  @Input({required:true}) item!:ItemModel;
  topValue = '100px';
  constructor(private cartService: CartService,private messageService: MessageService) {}
  
  onAddToCart(){
    this.cartService.addToCart({
        id:this.item.id,
        instructor:this.item.instructor,
        price:this.item.price,
        quantity:'1',
        thumbnail:this.item.imageUrl,
        title:this.item.title,
        rating:this.item.rating,
    });
    
  this.messageService.add({ 
      severity: 'success', 
      summary: 'Added to Cart', 
      detail: `${this.item.title} was added to your cart.` 
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.topValue = scrollY > 70 ? '30px' : '100px';
  }
}
