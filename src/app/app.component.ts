import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  year = new Date().getFullYear();
  footerLinks = [
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Contact', path: '/contact' },
  ];
}
