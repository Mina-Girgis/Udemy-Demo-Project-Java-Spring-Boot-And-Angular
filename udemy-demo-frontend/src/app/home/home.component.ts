import { Component } from '@angular/core';
import { ImgsSliderComponent } from "./imgs-slider/imgs-slider.component";
import { CategoryComponent } from "./category/category.component";
import { SectionsComponent } from './sections/sections.component';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [ImgsSliderComponent, SectionsComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
