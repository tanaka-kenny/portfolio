import { Component } from '@angular/core';
import { PROJECTS } from 'src/app/utils/data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = PROJECTS;

}

export interface Project {
  id: string;
  name: string;
  description: string;
  endResult?: string;
  imageSrc?: string; 
  tags: string[];
  isPublic?: {
    public: boolean;
    repoLink: string;
  };
  liveUrl?: string;
  sourceCode?: string;
  platforms?: string[];
  team: Team[];
}

export interface Team {
  name: string;
  linkedIn: string;
  imageSrc: string;
  position: string;
}
