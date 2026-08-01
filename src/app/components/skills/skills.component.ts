import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {

  skillCategories = [
    {
      icon: 'bi-palette-fill',
      title: 'Frontend',
      subtitle: 'Frameworks & UI',
      color: 'purple',
      skills: [
        'Angular', 'React', 'TypeScript', 'JavaScript ES6+',
        'Redux', 'HTML5', 'CSS3 / SCSS', 'Node.js', 'Express.js'
      ]
    },
    {
      icon: 'bi-gear-fill',
      title: 'Backend',
      subtitle: 'Languages & APIs',
      color: 'blue',
      skills: [
        'Java', 'Spring Boot', 'JPA / Hibernate',
        'Python', 'REST API Design', 'Microservices'
      ]
    },
    {
      icon: 'bi-cloud-fill',
      title: 'Cloud & DevOps',
      subtitle: 'Infrastructure & CI/CD',
      color: 'teal',
      skills: [
        'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS RDS',
        'AWS SQS', 'GCP', 'Docker', 'Jenkins', 'GitHub Actions'
      ]
    },
    {
      icon: 'bi-database-fill',
      title: 'Databases',
      subtitle: 'SQL & NoSQL',
      color: 'amber',
      skills: [
        'PostgreSQL', 'MySQL', 'MongoDB',
        'DynamoDB', 'MS SQL Server', 'Firebase'
      ]
    },
    {
      icon: 'bi-robot',
      title: 'AI & Emerging Tech',
      subtitle: 'Modern tooling',
      color: 'green',
      skills: [
        'Generative AI', 'Prompt Engineering', 'MCP Servers',
        'Claude Opus & Sonnet', 'GitHub Copilot', 'Windsurf'
      ]
    },
    {
      icon: 'bi-tools',
      title: 'Tools & Practices',
      subtitle: 'Workflow & methodology',
      color: 'coral',
      skills: [
        'Git', 'JIRA', 'SonarQube', 'Agile / Scrum',
        'Unit Testing', 'Cypress', 'Figma', 'Azure DevOps'
      ]
    }
  ];
}
