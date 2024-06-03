import { Component } from '@angular/core';
import { SvgComponent } from "../svgs.component";
import { SvgLogoComponent } from '../logo-svg.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    SvgComponent,
    SvgLogoComponent,
    MatToolbarModule
  ],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css'
})
export class TopNavbarComponent {
  title: string = 'DelDia';
}
