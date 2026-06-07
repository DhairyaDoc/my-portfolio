import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skillCategories = [
    {
      icon: '🎨',
      title: 'Frontend',
      subtitle: 'Frameworks & UI',
      color: 'purple',
      bgColor: '#eeedfe',
      skills: [
        'Angular', 'React', 'TypeScript', 'JavaScript ES6+',
        'Redux', 'HTML5', 'CSS3 / SCSS', 'Node.js', 'Express.js'
      ]
    },
    {
      icon: '⚙️',
      title: 'Backend',
      subtitle: 'Languages & APIs',
      color: 'blue',
      bgColor: '#e6f1fb',
      skills: [
        'Java', 'Spring Boot', 'JPA / Hibernate',
        'Python', 'REST API Design', 'Microservices'
      ]
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps',
      subtitle: 'Infrastructure & CI/CD',
      color: 'teal',
      bgColor: '#e1f5ee',
      skills: [
        'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS RDS',
        'AWS SQS', 'GCP', 'Docker', 'Jenkins', 'GitHub Actions'
      ]
    },
    {
      icon: '🗄️',
      title: 'Databases',
      subtitle: 'SQL & NoSQL',
      color: 'amber',
      bgColor: '#faeeda',
      skills: [
        'PostgreSQL', 'MySQL', 'MongoDB',
        'DynamoDB', 'MS SQL Server', 'Firebase'
      ]
    },
    {
      icon: '🤖',
      title: 'AI & Emerging Tech',
      subtitle: 'Modern tooling',
      color: 'green',
      bgColor: '#eaf3de',
      skills: [
        'Generative AI', 'Prompt Engineering', 'MCP Servers',
        'Claude Opus & Sonnet', 'GitHub Copilot', 'Windsurf'
      ]
    },
    {
      icon: '🛠️',
      title: 'Tools & Practices',
      subtitle: 'Workflow & methodology',
      color: 'coral',
      bgColor: '#faece7',
      skills: [
        'Git', 'JIRA', 'SonarQube', 'Agile / Scrum',
        'Unit Testing', 'Cypress', 'Figma', 'Azure DevOps'
      ]
    }
  ];
}
