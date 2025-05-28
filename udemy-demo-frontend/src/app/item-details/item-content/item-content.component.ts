import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { Course } from '../../intercace/Course';

@Component({
  selector: 'app-item-content',
  standalone:true,
  imports: [AccordionModule,PanelModule],
  templateUrl: './item-content.component.html',
  styleUrl: './item-content.component.css'
})
export class ItemContentComponent {
  @Input({required:true}) item!:Course;

}
