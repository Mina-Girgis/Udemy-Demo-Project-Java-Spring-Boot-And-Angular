import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ItemModel } from '../../intercace/item-model';

@Component({
  selector: 'app-item',
  standalone:true,
  imports: [CarouselModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({required:true}) item!:ItemModel;
}
