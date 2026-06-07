import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  info = [
    { label: 'Location', value: 'Halifax, NS, Canada' },
    { label: 'Current Role', value: 'Senior Software Developer' },
    { label: 'Experience', value: '4+ years' },
    { label: 'Education', value: 'MCS · Dalhousie University' },
    { label: 'Relocation', value: 'Open to relocate' },
    { label: 'Availability', value: 'Open to opportunities' },
  ];

  skills = ['Angular', 'React', 'Node.js', 'AWS', 'Agentic AI', 'Spring Boot'];
}
