import { Component } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isDark$;
  constructor(private themeService: ThemeService) {
    this.isDark$ = this.themeService.isDark$;
  }
  toggleTheme() { this.themeService.toggle(); }
}
