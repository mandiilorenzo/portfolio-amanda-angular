import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { AboutComponent } from '../../components/about/about.component';
import { SkillsComponent } from '../../components/skills/skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, ProfileComponent,AboutComponent, SkillsComponent, ProjectsComponent, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
