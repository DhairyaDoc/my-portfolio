import {
  Directive, ElementRef, Input, OnInit, PLATFORM_ID, inject, Renderer2,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds a scroll-triggered reveal animation.
 * Usage: <div appReveal [revealDelay]="120"> ... </div>
 * SSR-safe: on the server the element renders fully visible.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit {
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    const node = this.el.nativeElement as HTMLElement;

    if (!isPlatformBrowser(this.platformId) || !('IntersectionObserver' in window)) {
      this.renderer.addClass(node, 'reveal');
      this.renderer.addClass(node, 'in');
      return;
    }

    this.renderer.addClass(node, 'reveal');
    if (this.revealDelay) {
      this.renderer.setStyle(node, 'transition-delay', `${this.revealDelay}ms`);
    }

    // Above-the-fold elements reveal on the next frame so they animate in on
    // load without waiting for a scroll — no invisible flash of hero content.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      requestAnimationFrame(() => this.renderer.addClass(node, 'in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(node, 'in');
            observer.unobserve(node);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
  }
}
