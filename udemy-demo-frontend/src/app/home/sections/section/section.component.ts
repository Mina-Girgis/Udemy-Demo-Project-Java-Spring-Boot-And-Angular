import { Component, Input } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { CarouselModule } from 'primeng/carousel';
import { ItemModel } from '../../../intercace/item-model';

@Component({
  selector: 'app-section',
  standalone:true,
  imports: [CarouselModule, ItemComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.css'
})
export class SectionComponent {

  @Input({required:true}) title!:string;
  @Input({required:true}) itemsList!:ItemModel[];



responsiveOptions = [
  { breakpoint: '1000px', numVisible: 3, numScroll: 1 },
  { breakpoint: '740px', numVisible: 1, numScroll: 1 },
  { breakpoint: '560px', numVisible: 2, numScroll: 1 },
];
}
