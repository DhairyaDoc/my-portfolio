import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio-theme';
  private readonly isDark = new BehaviorSubject<boolean>(true);

  isDark$ = this.isDark.asObservable();

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.initTheme();
    }
  }

  toggle() {
    this.applyTheme(!this.isDark.value, true);
  }

  get currentTheme(): boolean {
    return this.isDark.value;
  }

  private initTheme() {
    const stored = localStorage.getItem(this.storageKey);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = stored ? stored === 'dark' : prefersDark;
    this.applyTheme(isDark, false);
  }

  private applyTheme(isDark: boolean, animate: boolean) {
    const root = document.documentElement;

    if (animate) {
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 500);
    }

    this.isDark.next(isDark);
    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem(this.storageKey, isDark ? 'dark' : 'light');
  }
}
