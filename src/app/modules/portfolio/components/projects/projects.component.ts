import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { ScrollRevealService } from '../../../../services/scroll-reveal.service';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {
  tabs = ['Front-end', 'Full Stack'];
  activeTab = 'Front-end';

  Projects = [
    {
      title: 'ViaCep',
      description: 'Aplicação React com TypeScript para buscar endereços via CEP, consumindo a API ViaCep com foco em usabilidade e responsividade.',
      image: 'assets/images/viacep-project.gif',
      link: ' https://via-cep-project-eso5fy87w-mandilorenzo.vercel.app/',
      stack: 'Front-end'
    },
    {
      title: 'Portfólio Amanda',
      description: 'Portfólio pessoal atualizado desenvolvido com Angular, com o objetivo de apresentar projetos, habilidades técnicas e trajetória profissional.',
      image: 'assets/images/portfolio-amanda.png',
      link: 'https://mandilorenzo.github.io/portfolio/',
      stack: 'Front-end'
    },
    {
      title: 'Huddle Landing Page',
      description: 'Projeto desafio do Frontend mentor que realizei para testar meus conhecimentos de codificação, utilizando HTML e CSS.',
      image: 'assets/images/huddle-lp2.gif',
      link: 'https://mandiilorenzo.github.io/huddle-LP/',
      stack: 'Front-end'
    },
    {
      title: 'MovieFlix - em desenvolvimento',
      description: 'Estou trabalhando em uma aplicação completa utilizando React no front-end, Node.js/Express no back-end e PostgreSQL no banco de dados. Em breve estará disponível aqui! Por enquanto, está disponível no meu GitHub.',
      image: 'assets/images/movieflix.png',
      link: 'https://github.com/mandiilorenzo/project-movieflix',
      stack: 'Full Stack'
    }
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  get filteredProjects() {
    return this.Projects.filter(p => p.stack === this.activeTab);
  }

  constructor(private scrollRevealService: ScrollRevealService) { }

  async ngAfterViewInit() {
    await this.scrollRevealService.reveal('.animation');
  }

}
