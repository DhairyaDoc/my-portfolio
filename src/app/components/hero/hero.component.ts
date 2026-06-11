import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface HeroBadge {
  icon: string;
  label: string;
  color: string;
  style: Record<string, string>;
  delay: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit, OnDestroy {
  displayedTitle = '';
  private fullTitle = 'Senior Frontend Developer';
  private typeIndex = 0;
  private typeInterval: ReturnType<typeof setInterval> | undefined;

  tags = [
    { label: 'Angular', color: 'purple' },
    { label: 'React', color: 'purple' },
    { label: 'TypeScript', color: 'purple' },
    { label: 'AWS', color: 'cyan' },
    { label: 'Spring Boot', color: 'cyan' },
    { label: 'Gen AI', color: 'green' },
    { label: 'MCP', color: 'green' },
  ];

  badges: HeroBadge[] = [
    {
      icon: '☁️',
      label: 'AWS',
      color: 'cyan',
      style: { top: '6%', left: '18%' },
      delay: '0s',
    },
    {
      icon: '🤖',
      label: 'Gen AI',
      color: 'green',
      style: { top: '4%', right: '14%' },
      delay: '0.4s',
    },
    {
      icon: '⚛️',
      label: 'React',
      color: 'purple',
      style: { top: '38%', left: '2%' },
      delay: '0.8s',
    },
    {
      icon: '🧠',
      label: 'LLMs',
      color: 'pink',
      style: { top: '58%', left: '6%' },
      delay: '1.2s',
    },
    {
      icon: '🔗',
      label: 'MCP',
      color: 'teal',
      style: { top: '36%', right: '2%' },
      delay: '1.6s',
    },
    {
      icon: '✦',
      label: 'Prompt Eng.',
      color: 'cyan',
      style: { bottom: '14%', left: '14%' },
      delay: '2s',
    },
    {
      icon: '🗄️',
      label: 'SQL',
      color: 'purple',
      style: { bottom: '10%', right: '12%' },
      delay: '2.4s',
    },
  ];

  ngOnInit() {
    this.typeInterval = setInterval(() => {
      if (this.typeIndex < this.fullTitle.length) {
        this.displayedTitle += this.fullTitle[this.typeIndex];
        this.typeIndex++;
      } else {
        clearInterval(this.typeInterval);
      }
    }, 60);
  }

  ngOnDestroy() {
    clearInterval(this.typeInterval);
  }
}
