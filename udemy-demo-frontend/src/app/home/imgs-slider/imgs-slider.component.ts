import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-imgs-slider',
  standalone:true,
  imports: [GalleriaModule,CarouselModule],
  templateUrl: './imgs-slider.component.html',
  styleUrl: './imgs-slider.component.css'
})
export class ImgsSliderComponent {

courses = [
  { image: 'https://ionic.io/blog/wp-content/uploads/2023/12/angular-feature-image.png', title: 'Angular - The Complete Guide', instructor: 'Maximilian Schwarzmüller' },
  { image: 'https://miro.medium.com/v2/resize:fit:750/1*YPSX0nSww0SsNGCQyBNOpA.jpeg', title: 'Angular - The Complete Guide', instructor: 'Maximilian Schwarzmüller' },
];

responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 1
  }
];


}
