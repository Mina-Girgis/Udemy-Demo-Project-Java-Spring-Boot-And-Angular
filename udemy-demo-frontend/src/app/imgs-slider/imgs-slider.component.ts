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

  // { image: 'https://placeimg.com/400/225/arch', title: 'Vue.js Essentials', instructor: 'Sarah Drasner' },
  // { image: 'https://placeimg.com/400/225/people', title: 'JavaScript Basics', instructor: 'John Doe' },
  // { image: 'https://placeimg.com/400/225/animals', title: 'CSS Flexbox & Grid', instructor: 'Jane Smith' },
  // add more courses...
];

responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '768px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '560px',
    numVisible: 1,
    numScroll: 1
  }
];


}
