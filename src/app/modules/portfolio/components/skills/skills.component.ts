import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements AfterViewInit {
  skills = [
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'React', icon: 'devicon-react-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'Node.js', icon: 'devicon-nodejs-line' },
    { name: 'Express.js', icon: 'devicon-express-original colored' },
    { name: 'Prisma', icon: 'devicon-prisma-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain' }
  ];

  async ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const ScrollReveal = (await import('scrollreveal')).default;
      ScrollReveal().reveal('.animation', {
        distance: '50px',
        duration: 1000,
        origin: 'bottom',
        reset: true,
        viewFactor: 0.4,
        mobile: true,
        cleanup: true,
      });
    }
  }
}
