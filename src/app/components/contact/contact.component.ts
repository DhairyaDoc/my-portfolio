import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  links = [
    {
      name: 'LinkedIn',
      handle: 'dhairya-doctor',
      url: 'https://linkedin.com/in/dhairya-doctor-aab852178/',
      iconClass: 'icon-purple',
      icon: 'linkedin',
    },
    {
      name: 'Portfolio',
      handle: 'yourportfolio.com',
      url: 'https://yourportfolio.com',
      iconClass: 'icon-teal',
      icon: 'briefcase',
    },
  ];

  // REPLACE THIS with your actual Google Form embed URL
  googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSfI3CIo2fYJbPEy84yWPO0P5AHyhWjKCSLRiD0SkqauWpgxXA/viewform?usp=dialog';
}
