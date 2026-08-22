import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  info = [
    { icon: 'bi-geo-alt-fill', label: 'Location', value: 'Halifax, NS, Canada' },
    { icon: 'bi-briefcase-fill', label: 'Current Role', value: 'Senior Software Developer' },
    { icon: 'bi-clock-history', label: 'Experience', value: '4+ years' },
    { icon: 'bi-mortarboard-fill', label: 'Education', value: 'MCS · Dalhousie University' },
    { icon: 'bi-airplane-fill', label: 'Relocation', value: 'Open to relocate' },
    { icon: 'bi-broadcast', label: 'Availability', value: 'Open to opportunities' },
  ];

  values = [
    { icon: 'bi-shield-check', title: 'Secure by default', text: 'Enterprise-grade code that clears Snyk, Aqua & DAST gates.' },
    { icon: 'bi-lightning-charge-fill', title: 'Ships fast', text: 'AI-augmented workflows that compress delivery cycles.' },
    { icon: 'bi-diagram-3-fill', title: 'Built to scale', text: 'Cloud-native architecture designed to grow with the product.' },
  ];
}
