import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-header',
  standalone:true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [ToolbarModule, InputTextModule, ButtonModule, AvatarModule, TooltipModule,OverlayPanelModule],
})
export class HeaderComponent {

}
