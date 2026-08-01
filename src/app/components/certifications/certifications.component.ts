import { Component } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
  color: string;
  credentialUrl: string; // '' = no public verification link yet — renders as a non-clickable card
}

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet, RevealDirective],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  // TODO: Confirm exact certification titles/years and paste each
  // credential's public verification URL into `credentialUrl` once issued.
  certifications: Certification[] = [
    { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024', icon: 'bi-cloud-fill', color: 'amber', credentialUrl: '' },
    { title: 'Angular — The Complete Guide', issuer: 'Udemy', year: '2023', icon: 'bi-bounding-box', color: 'red', credentialUrl: '' },
  ];

  achievements = [
    { icon: 'bi-graph-up-arrow', value: '0 → 80%', label: 'Test coverage lifted at RBC' },
    { icon: 'bi-shield-check', value: '100%', label: 'Security gates cleared (Snyk / Aqua / DAST)' },
    { icon: 'bi-mortarboard-fill', value: 'MCS', label: 'Dalhousie University' },
  ];
}
