import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
import { ItemModel } from '../../../intercace/item-model';

@Component({
  selector: 'app-item',
  standalone:true,
  imports: [CarouselModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({required:true}) item!:ItemModel;
  constructor(private router: Router) {}

  onItemClick(){
    this.router.navigate(['/item', this.item.id]);
  }
}
