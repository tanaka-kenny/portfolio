import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects: Project[] = [
    {
      name: 'Mentor Me',
      description: 'This is a mobile application that seeks to provide value through mentorship.',
      imageSrc: 'mentor_me_preview',
      tags: ['Frontend','Firebase', 'Ionic', 'Node.js', 'Backend', 'Neo4j', 'Personal'],
      platforms: ['Mobile'],
      sourceCode: 'https://github.com/tanaka-kenny/mentorMe'
    },
    {
      name: 'Assembly Management',
      description: 'platform for the AFM Church in the Gauteng Region that attempts to modernize and/or digitize the existing manual management system currently being used by the church.',
      tags: ['Professional', 'Frontend', 'Angular','Firebase', 'Node.js', 'Backend'],
      platforms: ['Web']

    },
    {
      name: 'Horus Management System',
      description: 'remote asset monitoring platform for cell towers that provides clients with visibility of their entire asset portfolio',
      tags: ['Professional', 'Frontend', 'Angular','Firebase', 'Ionic', 'Node.js', 'Backend'],
      liveUrl: '',
      platforms: ['Web', 'Mobile']
    },
    {
      name:'Kasi Connect',
      description: 'A mobile that attempted to bring internet connect to South African townships',
      imageSrc: 'kasi_connect_preview',
      tags: ['Profession', 'Frontend', 'Angular','Firebase', 'Ionic'],
      liveUrl: 'https://play.google.com/store/apps/details?id=za.co.omnipresent.kasi.connect&pli=1',
      platforms: ['Mobile']
    },
    {
      name: 'Murder in Paris',
      description: 'A website for the multi-award winning documentary by South African director, Enver Samuel.',
      imageSrc: 'murder_in_paris_preview',
      tags: ['Profession', 'Frontend', 'Angular','Firebase'],
      liveUrl: 'https://murderinparis.com/',
      platforms: ['Web']
    }
  ];

}

export interface Project {
  name: string;
  description: string;
  imageSrc?: string; 
  tags: string[];
  isPublic?: {
    public: boolean;
    repoLink: string;
  };
  liveUrl?: string;
  sourceCode?: string;
  platforms?: string[];
}
