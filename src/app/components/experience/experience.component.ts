import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Senior Front-End Developer',
      company: 'Royal Bank of Canada',
      shortName: 'RBC',
      location: 'Halifax, NS',
      duration: 'May 2025 – Present',
      type: 'Full Time',
      current: true,
      theme: 'purple',
      technologies: [
        'Angular',
        'Node.js',
        'Windsurf / Devin',
        'GitHub Copilot',
        'Jest',
        'MsSQL Server',
        'Snowflake',
        'HDFS',
        'Docker',
        'OpenShift Container Platform (OCP)',
        'GitHub Actions',
        'SonarQube',
      ],
      summary:
        'Leading front-end architecture and cloud-native microservices at Royal Bank of Canada, leveraging Agentic AI tools to accelerate delivery, strengthen security, and improve code quality across production systems.',
      points: [
        'Developed a polished enterprise-level UI using Agentic AI tools — Windsurf/Devin and GitHub Copilot — reducing feature delivery time by 40% and resulting in a highly responsive, intuitive experience with improved user engagement.',
        'Built a cloud-native Node.js backend microservice that streams HDFS and Snowflake production data into lower environments, enabling accurate production bug replication, feature testing, and production environment debugging with real data.',
        'Took full code ownership of the UI and Dataload microservices, managing architecture decisions, code reviews, and deployment pipelines.',
        'Implemented GitHub Actions CI/CD pipelines for streamlined, efficient deployments across all environments.',
        'Developed AI-driven prompts using Agentic AI to automate unit test generation for Angular components and backend microservices with Jest, integrating SonarQube to boost code coverage from 0% to 80%.',
        'Resolved Aqua, Snyk, DAST, and Open Source vulnerabilities — including XSS and prototype pollution — within GitHub Actions CI/CD to ensure the application meets enterprise-level security standards, achieving zero critical vulnerabilities at release.',
        'Participated in production deployment activities and provided production support to resolve live environment issues swiftly.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Canada Revenue Agency',
      shortName: 'CRA',
      location: 'Toronto, ON',
      duration: 'Jan 2023 – Mar 2025',
      type: 'Full Time',
      current: false,
      theme: 'cyan',
      technologies: [
        'Angular',
        'TypeScript',
        'Spring Boot',
        'SQL Server',
        'Jenkins',
        'SonarQube',
        'JIRA',
        'GitHub',
      ],
      summary:
        'Contributed to enterprise-grade internal applications at Canada Revenue Agency, modernizing legacy systems, improving data performance, and driving CI/CD automation across Agile development teams.',
      points: [
        'Developed an enterprise-grade UI using Angular and TypeScript, enhancing data visualization for critical internal government applications as part of a broader frontend architecture modernization effort that reduced technical debt across the platform.',
        'Modernized a legacy Java Struts application by migrating it to Angular UI components and Spring Boot backend APIs, improving maintainability, performance, and scalability.',
        'Developed RESTful APIs using Spring Boot, ensuring seamless and reliable communication between frontend and backend systems.',
        'Integrated SQL Server databases with optimized, performance-focused queries, improving system responsiveness and data retrieval performance by 20% and query execution efficiency by 30%.',
        'Automated CI/CD pipelines with Jenkins and integrated SonarQube for continuous code quality monitoring, increasing compliance by 25%.',
        'Utilized JIRA for streamlined incident tracking and project management, enhancing collaboration across development teams.',
        'Followed Agile methodologies, partnering cross-functionally with Product Managers and Senior Developers in Agile Sprints to implement new features iteratively.',
        'Documented technical designs and development workflows in Confluence, improving knowledge sharing and onboarding efficiency.',
        'Used GitHub for version control and conducting code reviews, maintaining high code quality and team collaboration standards.',
      ],
    },
    {
      title: 'Software Development Engineer',
      company: 'Ajmera Infotech',
      shortName: 'AI',
      location: 'Gujarat, India',
      duration: 'Oct 2020 – Jun 2021',
      type: 'Full Time',
      current: false,
      theme: 'green',
      technologies: [
        'Angular',
        'Spring Boot',
        'SQL Server',
        'Microsoft Azure',
        'JIRA',
        'Confluence',
      ],
      summary:
        'Joined as a full-stack developer responsible for frontend development, backend API integration, and database optimization, working in an Agile environment to deliver a complete end-to-end application.',
      points: [
        'Implemented new UI pages and improved frontend performance using Angular components and Angular DevTools, identifying and eliminating redundant API calls with Chrome DevTools performance profiling to optimize frontend load times.',
        'Developed Spring Boot REST API endpoints to retrieve and serve appropriate data from backend services to the frontend.',
        'Mapped and integrated backend APIs with frontend components, ensuring successful end-to-end implementation of complete application flows.',
        'Designed and optimized SQL Server stored procedures and queries, improving data retrieval efficiency and reducing query execution time by 30%.',
        'Utilized JIRA for sprint planning, bug tracking, and progress monitoring, ensuring smooth Agile development workflows.',
        'Maintained Confluence documentation for project architecture and troubleshooting guides, enhancing team collaboration and knowledge sharing.',
      ],
    },
  ];
}
