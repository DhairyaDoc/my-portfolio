import { Component, computed, signal } from '@angular/core';
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

  activeFilter = signal('All');
  searchTerm = signal('');

  skillCategories = [
    {
      icon: 'bi-palette-fill',
      title: 'Frontend',
      subtitle: 'Frameworks & UI',
      color: 'purple',
      skills: [
        'Angular', 'RxJS', 'Angular Material', 'React', 'Redux',
        'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3 / SCSS', 'Tailwind CSS'
      ]
    },
    {
      icon: 'bi-gear-fill',
      title: 'Backend',
      subtitle: 'Languages & APIs',
      color: 'blue',
      skills: [
        'Java', 'Node.js', 'Express.js', 'Spring Boot', 'SQL',
        'REST API Design', 'Microservices Architecture',
        'Microfrontend Architecture', 'JWT Authentication'
      ]
    },
    {
      icon: 'bi-cloud-fill',
      title: 'Cloud & DevOps',
      subtitle: 'Infrastructure & CI/CD',
      color: 'teal',
      skills: [
        'AWS EC2', 'AWS S3', 'AWS Lambda', 'AWS RDS', 'AWS SQS',
        'AWS Cognito', 'AWS CloudFormation', 'AWS API Gateway',
        'GitHub Actions CI/CD', 'OpenShift Container Platform (OCP)', 'Docker', 'Jenkins', 'Webpack'
      ]
    },
    {
      icon: 'bi-database-fill',
      title: 'Databases',
      subtitle: 'SQL & NoSQL',
      color: 'amber',
      skills: [
        'MS SQL Server', 'PostgreSQL', 'MySQL', 'MongoDB',
        'DynamoDB', 'Snowflake', 'HDFS'
      ]
    },
    {
      icon: 'bi-robot',
      title: 'AI & Emerging Tech',
      subtitle: 'Modern tooling',
      color: 'green',
      skills: [
        'Generative AI', 'Agentic AI Workflows', 'Prompt Engineering', 'MCP Servers',
        'Claude Opus & Sonnet', 'GitHub Copilot', 'Windsurf / Devin', 'AI-Assisted Test Generation'
      ]
    },
    {
      icon: 'bi-tools',
      title: 'Tools & Practices',
      subtitle: 'Workflow & methodology',
      color: 'coral',
      skills: [
        'Git', 'Jira', 'Confluence', 'Swagger', 'RAML', 'TDD',
        'SonarQube', 'OAuth2', 'Agile Methodology', 'SDLC',
        'SSL Certificates', 'Jest', 'Cypress', 'Protractor',
        'CI/CD Pipelines', 'Code Reviews', 'Vulnerability Remediation (Snyk/Aqua/DAST)'
      ]
    }
  ];

  filters = ['All', ...this.skillCategories.map(c => c.title)];

  totalSkills = this.skillCategories.reduce((sum, c) => sum + c.skills.length, 0);

  filteredCategories = computed(() => {
    const filter = this.activeFilter();
    const term = this.searchTerm().trim().toLowerCase();

    return this.skillCategories
      .filter(cat => filter === 'All' || cat.title === filter)
      .map(cat => ({
        ...cat,
        skills: term ? cat.skills.filter(s => s.toLowerCase().includes(term)) : cat.skills,
      }))
      .filter(cat => cat.skills.length > 0);
  });

  visibleSkillCount = computed(() =>
    this.filteredCategories().reduce((sum, c) => sum + c.skills.length, 0)
  );

  setFilter(title: string) {
    this.activeFilter.set(title);
  }

  onSearch(event: Event) {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  clearSearch() {
    this.searchTerm.set('');
  }
}
