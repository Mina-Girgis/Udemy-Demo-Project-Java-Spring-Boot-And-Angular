import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart-service';
import { MessageService } from 'primeng/api';
import { Course } from '../../intercace/Course';
import { Constants } from '../../constants/constants';
import { extractUserIdToken } from '../../intercace/jwt-payload';
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-item-sidebar',
  standalone:true,
  imports: [CommonModule,ButtonModule],
  templateUrl: './item-sidebar.component.html',
  styleUrl: './item-sidebar.component.css'
})
export class ItemSidebarComponent {
  @Input({required:true}) item!:Course;
  topValue = '100px';
  constructor(private dataSetvice:DataService,private cartService: CartService,private messageService: MessageService) {}
  
  onAddToCart(){
    
    this.cartService.addToCart(this.item.Id).subscribe({
      next:()=>{
        this.messageService.add({ 
        severity: 'success', 
        summary: 'Added to Cart', 
        detail: `${this.item.Title} was added to your cart.` 
      });
      },
      complete:()=>{},
      error:(err)=>{
        console.log(err);
        
        this.messageService.add({ 
        severity: 'error', 
        summary: 'Item Cant be added',  
      });
      },
    });

    
  }


  onAddToFaV(){
    this.dataSetvice.addFavCourse(this.item.Id).subscribe(()=>{
       
      if(!this.item.IsFav){
          this.messageService.add({ 
        severity: 'success', 
        summary: 'Course added to your favorites', 
        detail: `${this.item.Title}` 
      });
      }
     
      this.item.IsFav = !this.item.IsFav;
    });
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.topValue = scrollY > 70 ? '30px' : '100px';
  }
}
