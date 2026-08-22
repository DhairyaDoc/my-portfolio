import { Component, OnInit, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';

interface Stat { value: string; label: string; }
interface Social { icon: string; label: string; url: string; }

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  // Signal, not a plain field: this app runs zoneless, so a value mutated
  // inside a setTimeout callback needs a signal to notify the view.
  displayedRole = signal('');

  private roles = [
    'Senior Software Developer',
    'Full-Stack Engineer',
    'Cloud & AI Builder',
  ];
  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private timer: ReturnType<typeof setTimeout> | undefined;

  tags = ['Angular', 'React', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'AWS', 'Gen AI', 'MCP'];

  stats: Stat[] = [
    { value: '4+', label: 'Years of professional experience' },
    { value: '9+', label: 'Core technologies across the stack' },
  ];

  socials: Social[] = [
    { icon: 'bi-linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/dhairya-doctor-aab852178/' },
    { icon: 'bi-github', label: 'GitHub', url: 'https://github.com' },
  ];

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.tick();
    } else {
      this.displayedRole.set(this.roles[0]);
    }
  }

  private tick() {
    const current = this.roles[this.roleIndex];
    if (!this.deleting) {
      this.displayedRole.set(current.slice(0, ++this.charIndex));
      if (this.charIndex === current.length) {
        this.deleting = true;
        this.timer = setTimeout(() => this.tick(), 2200);
        return;
      }
    } else {
      this.displayedRole.set(current.slice(0, --this.charIndex));
      if (this.charIndex === 0) {
        this.deleting = false;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
    this.timer = setTimeout(() => this.tick(), this.deleting ? 40 : 85);
  }

  ngOnDestroy() {
    if (this.timer) clearTimeout(this.timer);
  }
}
