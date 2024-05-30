import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SvgComponent } from "./components/svgs.component";
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive,
        HttpClientModule,
        SvgComponent,
        TopNavbarComponent,
        SideMenuComponent
    ]
})
export class AppComponent {

}
