import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '',            component: HeroComponent },
  { path: 'about',       component: AboutComponent },
  { path: 'skills',      component: SkillsComponent },
  { path: 'experience',  component: ExperienceComponent },
  { path: 'projects',    component: ProjectsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact',     component: ContactComponent },
  { path: '**',          redirectTo: '' }
];
