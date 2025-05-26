import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ItemModel } from '../../intercace/item-model';

@Component({
  selector: 'app-item-header',
  standalone:true,
  imports: [CardModule,RatingModule,AvatarModule,ToolbarModule],
  templateUrl: './item-header.component.html',
  styleUrl: './item-header.component.css'
})
export class ItemHeaderComponent {
    @Input({required:true}) item!:ItemModel;
}
