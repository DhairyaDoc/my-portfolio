import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  links = [
    { name: 'LinkedIn', handle: 'in/dhairya-doctor', url: 'https://linkedin.com/in/dhairya-doctor-aab852178/', icon: 'bi-linkedin', color: 'blue' },
    { name: 'GitHub', handle: 'github.com/dhairya', url: 'https://github.com', icon: 'bi-github', color: 'purple' },
    { name: 'Location', handle: 'Halifax, NS · Canada', url: 'https://maps.google.com/?q=Halifax,NS', icon: 'bi-geo-alt-fill', color: 'teal' },
  ];

  // REPLACE with your actual Google Form embed URL (the ?embedded=true variant)
  private rawFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfI3CIo2fYJbPEy84yWPO0P5AHyhWjKCSLRiD0SkqauWpgxXA/viewform?embedded=true';

  formUrl: SafeResourceUrl;

  constructor(sanitizer: DomSanitizer) {
    this.formUrl = sanitizer.bypassSecurityTrustResourceUrl(this.rawFormUrl);
  }
}
