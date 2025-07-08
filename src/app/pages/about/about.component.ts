import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  skills = [
    'Typescript',
    'Java',
    'Angular',
    'Spring Boot',
    'Firebase',
    'Ionic',
    'HTML', 
    'CSS',
    'SQL',
    'NoSQL',
    'Git',
    'CI/CD Pipelines'
  ];
}
