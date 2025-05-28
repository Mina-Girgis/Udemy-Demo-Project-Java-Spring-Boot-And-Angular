import { Component, Input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
import { Course } from '../../../intercace/Course';

@Component({
  selector: 'app-item',
  standalone:true,
  imports: [CarouselModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({required:true}) item!:Course;
  constructor(private router: Router) {}

  onItemClick(){
    this.router.navigate(['/item', this.item.Id]);
  }
}
