import { Component } from '@angular/core';
import { SectionComponent } from './section/section.component';
import { ItemModel } from '../intercace/item-model';

@Component({
  selector: 'app-sections',
  standalone:true,
  imports: [SectionComponent],
  templateUrl: './sections.component.html',
  styleUrl: './sections.component.css'
})
export class SectionsComponent {

  title:string = "Recommended For You..."
  courses:ItemModel[] = [
  {
    id:'1',
    imageUrl:'https://javapro.io/de/wp-content/uploads/sites/1/2022/04/SpringBoot-Logo-qu.png',
    title: 'Angular - The Complete Guide The Complete Guide The Complete Guide The Complete Guide ',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    price: '$15.99',
  },
  {
    id:'2',
    imageUrl:'https://javapro.io/de/wp-content/uploads/sites/1/2022/04/SpringBoot-Logo-qu.png',
    title: 'Angular - The Complete Guide The Complete Guide The Complete Guide The Complete Guide ',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    price: '$13.99',
  },
  {
    id:'3',
    imageUrl:'https://javapro.io/de/wp-content/uploads/sites/1/2022/04/SpringBoot-Logo-qu.png',
    title: 'Angular - The Complete Guide The Complete Guide The Complete Guide The Complete Guide ',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    price: '$19.99',
  },
  {
    id:'4',
    imageUrl:'https://javapro.io/de/wp-content/uploads/sites/1/2022/04/SpringBoot-Logo-qu.png',
    title: 'Angular - The Complete Guide The Complete Guide The Complete Guide The Complete Guide ',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    price: '$22.99',
  },
  {
    id:'5',
    imageUrl:'https://javapro.io/de/wp-content/uploads/sites/1/2022/04/SpringBoot-Logo-qu.png',
    title: 'Angular - The Complete Guide The Complete Guide The Complete Guide The Complete Guide ',
    instructor: 'Maximilian Schwarzmüller',
    rating: '4.7',
    price: '$10.99',
  },
  ];
}
