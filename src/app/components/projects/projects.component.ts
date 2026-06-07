import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Technology {
  name: string;
  color: string;
}

interface Project {
  key: string;
  title: string;
  icon: string;
  iconBg: string;
  banner: string;
  shortDescription: string;
  fullDescription: string;
  github: string;
  highlights: string[];
  technologies: Technology[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  selectedProject: Project | null = null;
  isModalOpen = false;

  projects: Project[] = [
    {
      key: 'foodie',
      title: 'Halifax Foodie',
      icon: '🍕',
      iconBg: '#eeedfe',
      banner: 'linear-gradient(90deg, #6c63ff, #00d4ff)',
      shortDescription:
        'A serverless food delivery application built on React and AWS, featuring secure authentication, real-time data processing, and scalable cloud infrastructure.',
      fullDescription:
        'Halifax Foodie is a fully serverless application built with React on the frontend and AWS as the complete backend infrastructure. Led a team of 3 developers from project setup to deployment, architecting the entire cloud infrastructure and delivering a production-ready application.',
      github: 'https://github.com',
      highlights: [
        'Led a team of 3 developers, setting up the core React application architecture and configuring AWS service access using AWS Access Keys for secure cloud integration.',
        'Implemented user authentication and authorization using AWS Cognito User Pools, building the complete login and registration UI flows with secure session management.',
        'Designed and deployed RESTful API endpoints using AWS API Gateway, securing all endpoints with API Key authentication and connecting them to backend Lambda functions.',
        'Developed serverless backend logic using AWS Lambda functions to process incoming requests, execute business logic, and perform CRUD operations on DynamoDB.',
        'Deployed the production frontend on AWS S3, configuring static website hosting for reliable and cost-effective delivery of the React application.',
      ],
      technologies: [
        { name: 'React', color: 'purple' },
        { name: 'AWS Cognito', color: 'teal' },
        { name: 'API Gateway', color: 'teal' },
        { name: 'AWS Lambda', color: 'teal' },
        { name: 'DynamoDB', color: 'amber' },
        { name: 'AWS S3', color: 'teal' },
      ],
    },
    {
      key: 'iconnect',
      title: 'IConnect',
      icon: '💬',
      iconBg: '#f3e8ff',
      banner: 'linear-gradient(90deg, #c792ea, #6c63ff)',
      shortDescription:
        'A full-stack team collaboration application with a secure Node.js REST API, MongoDB database, JWT authentication, and automated CI/CD deployment on Heroku.',
      fullDescription:
        'IConnect is a full-stack collaboration platform built with React, Node.js, and MongoDB. Solely responsible for the entire backend architecture — from API design and database schema to deployment pipelines — delivering a fast, secure, and scalable application.',
      github: 'https://github.com',
      highlights: [
        'Architected and developed the complete Node.js REST API backend from scratch, implementing JWT token validation middleware to secure all API endpoints from unauthorized access.',
        'Integrated MongoDB with a carefully designed database schema optimized for efficient data storage and retrieval, minimizing query complexity and improving API response times.',
        'Optimized backend logic and API response handling to minimize latency, resulting in fast response times and reduced user wait time across all application features.',
        'Deployed both the React frontend and Node.js backend on Heroku, configuring environment variables and production settings for reliable live hosting.',
        'Implemented GitHub Actions CI/CD pipelines to automate build and deployment workflows, enabling one-click deployments to Heroku on every code push.',
      ],
      technologies: [
        { name: 'React', color: 'purple' },
        { name: 'Node.js', color: 'blue' },
        { name: 'MongoDB', color: 'blue' },
        { name: 'JWT', color: 'purple' },
        { name: 'Heroku', color: 'teal' },
        { name: 'GitHub Actions', color: 'teal' },
      ],
    },
  ];

  openModal(project: Project): void {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }

  stopPropagation(event: MouseEvent): void {
    event.stopPropagation();
  }
}
