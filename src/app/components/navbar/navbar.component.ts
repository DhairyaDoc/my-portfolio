import { Component, signal } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

interface NavItem { label: string; path: string; }

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDark$;
  menuOpen = signal(false);

  links: NavItem[] = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor(private themeService: ThemeService) {
    this.isDark$ = this.themeService.isDark$;
  }

  toggleTheme() { this.themeService.toggle(); }
  toggleMenu() { this.menuOpen.update((v) => !v); }
  closeMenu() { this.menuOpen.set(false); }
}
