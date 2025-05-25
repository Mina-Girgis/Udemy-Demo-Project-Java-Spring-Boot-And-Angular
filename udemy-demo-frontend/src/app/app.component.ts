import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CategoryComponent } from "./category/category.component";
import { ImgsSliderComponent } from "./imgs-slider/imgs-slider.component";
import { SectionsComponent } from "./sections/sections.component";

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent, CategoryComponent, ImgsSliderComponent, SectionsComponent],
})
export class AppComponent {
  title = 'udemy-demo-frontend';
}
